# from rest_framework import serializers
# from .models import Restaurant

# class RestaurantSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Restaurant
#         fields = ['id', 'name', 'cuisine', 'menu', 'description', 'header_image', 'logo', 'address', 'opening_hours', 'minimum_order_amount', 'delivery_charge', 'estimated_delivery_time', 'branch_status']

# serializers.py
# serializers.py
from rest_framework import serializers
from .models import Restaurant, MenuItem

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = "['id', 'name', 'price, 'image']"

class RestaurantSerializer(serializers.ModelSerializer):
    menuItems = MenuItemSerializer(many=True)

    class Meta:
        model = Restaurant
        fields = [
            'id', 'restaurantName', 'logo', 'header_image', 'mobile', 'address',
            'email', 'password', 'state', 'menuItems', 'cuisine', 'name', 'description',
            'opening_hours', 'minimum_order_amount', 'delivery_charge', 'estimated_delivery_time',
            'branch_status'
        ]

    def create(self, validated_data):
        menuItems_data = validated_data.pop('menuItems')
        restaurant = Restaurant.objects.create(**validated_data)
        for menuItem_data in menuItems_data:
            MenuItem.objects.create(restaurant=restaurant, **menuItem_data)
        return restaurant

    def update(self, instance, validated_data):
        menuItems_data = validated_data.pop('menuItems')
        instance.restaurantName = validated_data.get('restaurantName', instance.restaurantName)
        instance.logo = validated_data.get('logo', instance.logo)
        instance.header_image = validated_data.get('header_image', instance.header_image)
        instance.mobile = validated_data.get('mobile', instance.mobile)
        instance.address = validated_data.get('address', instance.address)
        instance.email = validated_data.get('email', instance.email)
        instance.password = validated_data.get('password', instance.password)
        instance.state = validated_data.get('state', instance.state)
        instance.cuisine = validated_data.get('cuisine', instance.cuisine)
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.opening_hours = validated_data.get('opening_hours', instance.opening_hours)
        instance.minimum_order_amount = validated_data.get('minimum_order_amount', instance.minimum_order_amount)
        instance.delivery_charge = validated_data.get('delivery_charge', instance.delivery_charge)
        instance.estimated_delivery_time = validated_data.get('estimated_delivery_time', instance.estimated_delivery_time)
        instance.branch_status = validated_data.get('branch_status', instance.branch_status)
        instance.save()

        # Update or create menu items
        for menuItem_data in menuItems_data:
            menuItem_id = menuItem_data.get('id')
            if menuItem_id:
                menuItem = MenuItem.objects.get(id=menuItem_id, restaurant=instance)
                menuItem.name = menuItem_data.get('name', menuItem.name)
                menuItem.price = menuItem_data.get('price', menuItem.price)
                menuItem.image = menuItem_data.get('image', menuItem.image)
                menuItem.save()
            else:
                MenuItem.objects.create(restaurant=instance, **menuItem_data)
        
        return instance
