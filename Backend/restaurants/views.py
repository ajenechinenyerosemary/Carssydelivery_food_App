# from django.shortcuts import render
# from django.urls import reverse_lazy
# from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
# from .models import Restaurant
# from rest_framework import generics
# from .serializers import RestaurantSerializer
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework import status




# class RestaurantListCreateView(APIView):
#     def get(self, request):
#         restaurants = Restaurant.objects.all()
#         serializer = RestaurantSerializer(restaurants, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = RestaurantSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class RestaurantDetailView(APIView):
#     def get_object(self, pk):
#         try:
#             return Restaurant.objects.get(pk=pk)
#         except Restaurant.DoesNotExist:
#             raise Http404

#     def get(self, request, pk):
#         restaurant = self.get_object(pk)
#         serializer = RestaurantSerializer(restaurant)
#         return Response(serializer.data)

#     def delete(self, request, pk):
#         restaurant = self.get_object(pk)
#         restaurant.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


# views.py
from rest_framework import generics
from .models import Restaurant
from .serializers import RestaurantSerializer

class RestaurantListCreateView(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

class RestaurantDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
