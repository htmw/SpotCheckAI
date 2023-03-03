#from app
from .serializers import PostSerializer
from .models import Post

#from rest_framework
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_api_key.permissions import HasAPIKey


#for ML model
from PIL import Image
import tensorflow as tf
import keras
import cv2
import numpy as np

# Create your views here.
# views: handles HTTP requests and returns HTTP responses

# POST only view
class PostView(generics.CreateAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # permission_classes = [HasAPIKey | IsAuthenticated]

    def post (self, request):
        #load model
        model = keras.models.load_model('/Users/raffertyleung/Desktop/cs691/models/imageclassifier.h5')

        #instantiates serializer
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            #make prediction with loaded model

            #validated data from serializer
            image = serializer.validated_data['image']

            #image preprocessing
            image = Image.open(image)
            image_np = np.array(image) #converts img to np array
            
            image_recolor = cv2.cvtColor(image_np, cv2.COLOR_BGR2RGB) #np array conversion to bgr to match model input

            image_resize = tf.image.resize(image_recolor, (256,256)) #resizes to 256,256

            image_tensor = tf.convert_to_tensor(image_resize, dtype=tf.float32) #converts np array to tensor object

            print("Image as tensor:\n", image_tensor)

            prediction = model.predict(np.expand_dims(image_tensor/255, 0))

            #converting nparray to numerical value
            prediction = prediction[0][0]

            #update prediction attribute
            create = Post.objects.create(image=str(image), yhat=prediction)
            create.save()

            #returns prediction and HTTP status
            return Response(prediction, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)