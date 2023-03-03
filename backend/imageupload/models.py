from django.db import models

# Create your models here.

class Post (models.Model):
  image = models.ImageField(upload_to='uploads/')
  yhat = models.FloatField(null=True)
  time_stamp = models.DateTimeField(auto_now_add=True)

  #names the object with prediction 
  def __str__(self):
    return str(self.time_stamp)