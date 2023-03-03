from django.contrib import admin
from .models import Post

# Register your models here.
# registers post model to admin interface
admin.site.register(Post)

