from django.urls import path
from . import views

urlpatterns = [
    path("api/products/", views.products1),
    path("api/products/<int:id>/", views.product1),
    path("api/categories/", views.categories1),
    path("api/categories/<int:id>/", views.categorie1),
    path("api/categories/<int:id>/products", views.productsByCategory1),
]
