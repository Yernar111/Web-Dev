from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Product, Category

def products1(request):
    products = Product.objects.all()
    data = list(products.values())
    return JsonResponse(data, safe=False)

def product1(request, id):
    product = Product.objects.filter(id=id).values().first()
    if not product:
        return JsonResponse({"error": "User not found"}, status=404)
    return JsonResponse(product)

def categories1(request):
    categories = Category.objects.all()
    data = list(categories.values())
    return JsonResponse(data, safe=False)

def categorie1(request, id):
    categorie = Category.objects.filter(id=id).values().first()
    if not categorie:
        return JsonResponse({"error": "User not found"}, status=404)
    return JsonResponse(categorie)


def productsByCategory1(request, id):
    products = Product.objects.filter(category=id)
    data = list(products.values())
    return JsonResponse(data, safe=False)



# Create your views here.
