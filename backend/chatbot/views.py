from django.shortcuts import render
from .models import QuestionResponse
from .serializers import QuestionResponseSerializer
from rest_framework import generics

# Create your views here.
class QuestionResponseView(generics.CreateAPIView):
    queryset = QuestionResponse.objects.all()
    serializer_class=QuestionResponseSerializer