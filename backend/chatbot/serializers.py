from rest_framework import serializers
from .models import QuestionResponse

class QuestionResponseSerializer(serializers.ModelSerializer):
  class Meta:
    model = QuestionResponse
    fields = ['question', 'response', 'time_stamp']
  