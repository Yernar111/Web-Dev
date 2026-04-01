# from django.urls import path
# from . import views

from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet

router = DefaultRouter()

router.register('categories', CategoryViewSet, basename='category')

router.register('products', ProductViewSet, basename='product')

urlpatterns = router.urls

# urlpatterns = [
#     path("api/products/", views.products1),
#     path("api/products/<int:id>/", views.product1),
#     path("api/categories/", views.categories1),
#     path("api/categories/<int:id>/", views.categorie1),
#     path("api/categories/<int:id>/products", views.productsByCategory1),
# ]
