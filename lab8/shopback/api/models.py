from django.db import models


class Category(models.Model):
    name = CharField(max_length=20)

class Product(models.Model):
    name = CharField(max_length=20)
    price = FloatField()
    description = TextField(max_length=100)
    count = IntegerField()
    is_active = BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)


# Create your models here.
