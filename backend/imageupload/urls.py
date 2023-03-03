from django.urls import path, include
from .views import *

urlpatterns = [
    path('posts/', PostView.as_view(), name='post_list'),
]