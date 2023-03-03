from rest_framework import serializers
from .models import Post

#serializer: SHOWS the data on the REST interface
#translates models (database schema) into python data types that can be rendered into JSON

class PostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Post
    fields = ['id', 'image', 'yhat', 'time_stamp']

