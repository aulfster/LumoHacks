from __future__ import unicode_literals

from django.db import models

# Create your models here.

class MessageTable(models.Model):
    userFrom = models.CharField(max_length=400)
    userTo = models.CharField(max_length=400)
    message = models.TextField(blank = True)


