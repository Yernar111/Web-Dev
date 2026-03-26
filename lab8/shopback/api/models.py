from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=20)

class Product(models.Model):
    name = models.CharField(max_length=20)
    price = models.FloatField()
    description = models.TextField(max_length=100)
    count = models.IntegerField()
    is_active = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)


# Create your models here.
