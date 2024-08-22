# admin.py
from django.contrib import admin
from .models import Order, OrderItem

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'restaurant', 'total_price', 'status', 'created_at', 'updated_at']
    list_filter = ['status', 'created_at', 'updated_at']
    search_fields = ['user__username', 'restaurant__name']

# Register OrderItem if it exists
@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ['id', 'order', 'menu_item', 'quantity', 'price']
    list_filter = ['order']
    search_fields = ['menu_item']
