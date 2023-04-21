from django.urls import path, include
from .views import *

urlpatterns = [
    path('qa/', QuestionResponseView.as_view(), name='qa_view'),
]