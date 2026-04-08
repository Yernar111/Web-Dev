from django.urls import path

from .views.generics import CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView
from .views.cbv import ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),

    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
]