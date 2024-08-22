# # models.py
# from django.db import models
# from django.conf import settings
# from django.utils.translation import gettext_lazy as _
# from restaurants.models import Restaurant

# class Order(models.Model):
#     class OrderStatus(models.TextChoices):
#         PENDING = 'P', _('Pending')
#         PROCESSING = 'PR', _('Processing')
#         COMPLETED = 'C', _('Completed')
#         CANCELED = 'CA', _('Canceled')

   
   
#     # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='orders')
#     items = models.TextField()  # This could be replaced with a more complex structure, such as a separate OrderItem model
#     total_price = models.DecimalField(max_digits=10, decimal_places=2)
#     status = models.CharField(
#         max_length=2,
#         choices=OrderStatus.choices,
#         default=OrderStatus.PENDING,
#     )
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return f'Order {self.id} by {self.user.username}'

# # Optionally, if you have an OrderItem model, it might look like this:
# class OrderItem(models.Model):
#     order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
#     menu_item = models.CharField(max_length=255)
#     quantity = models.PositiveIntegerField()
#     price = models.DecimalField(max_digits=10, decimal_places=2)

#     def __str__(self):
#         return f'{self.quantity} x {self.menu_item}'


# models.py
from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from restaurants.models import Restaurant

class Order(models.Model):
    class OrderStatus(models.TextChoices):
        PENDING = 'P', _('Pending')
        PROCESSING = 'PR', _('Processing')
        COMPLETED = 'C', _('Completed')
        CANCELED = 'CA', _('Canceled')

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='orders')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='orders')
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=2,
        choices=OrderStatus.choices,
        default=OrderStatus.PENDING,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Order {self.id} by {self.user.username}'

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    menu_item = models.CharField(max_length=255)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.quantity} x {self.menu_item}'
