# from django.urls import path
# from . import views
# from django.urls import path
# # from .views import RestaurantListCreateView, RestaurantRetrieveUpdateDestroyView
# from django.urls import path
# from .views import RestaurantListCreateView, RestaurantDetailView


# urlpatterns = [
#     path('api/restaurants/', RestaurantListCreateView.as_view(), name='restaurant-list-create'),
#     path('api/restaurants/<int:pk>/', RestaurantDetailView.as_view(), name='restaurant-detail'),
# ]

# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RestaurantListCreateView, RestaurantDetailView

urlpatterns = [
    path('restaurants/', RestaurantListCreateView.as_view(), name='restaurant-list-create'),
    path('restaurants/<int:pk>/', RestaurantDetailView.as_view(), name='restaurant-detail'),
]
