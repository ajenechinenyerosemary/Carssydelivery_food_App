# from django.contrib import admin
# from .models import Restaurant
# # Register your models here.

# @admin.register(Restaurant)
# class RestaurantAdmin(admin.ModelAdmin):
#     list_display = ('name', 'cuisine', 'address', 'opening_hours', 'branch_status')
#     search_fields = ('name', 'cuisine', 'address')

from django.contrib import admin
from .models import Restaurant
from django.db.models import Avg

@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('restaurantName', 'cuisine', 'address', 'get_average_rating', 'branch_status')
    list_display_links = ('restaurantName',)
    search_fields = ('restaurantName', 'cuisine', 'address')
    readonly_fields = ('get_average_rating',)
    list_filter = ('cuisine', 'branch_status')
    ordering = ('-restaurantName',)  # Order by restaurant name descending

    def get_average_rating(self, obj):
        average_rating = Rating.objects.filter(restaurant=obj).aggregate(Avg('rating'))['rating__avg']
        return average_rating or "No ratings yet"

    get_average_rating.short_description = 'Average Rating'  # Customize column header