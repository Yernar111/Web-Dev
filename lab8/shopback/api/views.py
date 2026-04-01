# from django.shortcuts import render
# from django.http import HttpResponse, JsonResponse
from .models import Product, Category

from rest_framework.viewsets import ModelViewSet
from .serializers import ProductSerializer, CategorySerializer

from rest_framework.decorators import action
from rest_framework.response import Response


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products_by_category(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# def products1(request):
#     products = Product.objects.all()
#     data = list(products.values())
#     return JsonResponse(data, safe=False)

# def product1(request, id):
#     product = Product.objects.filter(id=id).values().first()
#     if not product:
#         return JsonResponse({"error": "User not found"}, status=404)
#     return JsonResponse(product)

# def categories1(request):
#     categories = Category.objects.all()
#     data = list(categories.values())
#     return JsonResponse(data, safe=False)

# def categorie1(request, id):
#     categorie = Category.objects.filter(id=id).values().first()
#     if not categorie:
#         return JsonResponse({"error": "User not found"}, status=404)
#     return JsonResponse(categorie)


# def productsByCategory1(request, id):
#     products = Product.objects.filter(category=id)
#     data = list(products.values())
#     return JsonResponse(data, safe=False)



# # Create your views here.
