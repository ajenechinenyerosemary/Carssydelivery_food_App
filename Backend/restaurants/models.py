from django.db import models

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='menu_images/', null=True, blank=True)

    def __str__(self):
        return self.name

class Restaurant(models.Model):
    restaurantName = models.CharField(max_length=100)  # Choose this as the primary name field
    logo = models.ImageField(upload_to='logos/', null=True, blank=True)
    header_image = models.ImageField(upload_to='headerImage/')
    mobile = models.CharField(max_length=15, default='000-000-0000', verbose_name="Mobile Number")
    address = models.CharField(max_length=255)
    email = models.EmailField(default='default@example.com')
    password = models.CharField(max_length=100, default="")  # Consider password hashing for security
    state = models.CharField(max_length=100, default='Some Default State')
    menuItems = models.ManyToManyField(MenuItem)  # This represents the menu

    cuisine = models.CharField(max_length=50)
    description = models.TextField()
    opening_hours = models.CharField(max_length=100)
    minimum_order_amount = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_charge = models.DecimalField(decimal_places=2, max_digits=10)
    estimated_delivery_time = models.CharField(max_length=50)
    branch_status = models.CharField(max_length=50)

    def __str__(self):
        return self.restaurantName