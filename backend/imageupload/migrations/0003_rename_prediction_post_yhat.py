# Generated by Django 4.1.6 on 2023-02-10 02:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('imageupload', '0002_post_time_stamp_alter_post_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='prediction',
            new_name='yhat',
        ),
    ]
