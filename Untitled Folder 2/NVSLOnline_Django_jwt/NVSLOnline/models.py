from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Divisions(models.Model):
    Id = models.AutoField(primary_key=True)
    DivisionName = models.TextField()
    IsHidden = models.BooleanField(default=False)