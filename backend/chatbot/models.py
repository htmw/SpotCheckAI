from django.db import models

# Create your models here.

class QuestionResponse(models.Model):
    question = models.CharField(max_length=500)
    response = models.CharField(max_length=1000, blank=True)
    time_stamp = models.DateTimeField(auto_now_add=True)

  #names the object with prediction 
    def __str__(self):
        return str(self.question)