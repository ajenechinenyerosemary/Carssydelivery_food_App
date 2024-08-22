# from django.db import migrations, models

# def set_default_mobile(apps, schema_editor):
#     Restaurant = apps.get_model('restaurants', 'Restaurant')
#     for restaurant in Restaurant.objects.all():
#         restaurant.mobile = '000-000-0000'  # Replace with your default value
#         restaurant.save()

# class Migration(migrations.Migration):

#     dependencies = [
#         ('restaurants', 'previous_migration_file'),  # Replace with the last migration file name
#     ]

#     operations = [
#         migrations.AddField(
#             model_name='restaurant',
#             name='mobile',
#             field=models.CharField(max_length=15, default='000-000-0000'),  # Same default value
#         ),
#         migrations.RunPython(set_default_mobile),
#     ]

# Generated by Django 5.0.7 on 2024-07-22 22:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),  # Ensure this is correct and points to the initial migration of your user app
    ]

    operations = [
        migrations.CreateModel(
            name='MenuItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('image', models.ImageField(blank=True, null=True, upload_to='menu_images/')),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('restaurantName', models.CharField(max_length=100)),
                ('logo', models.ImageField(blank=True, null=True, upload_to='logos/')),
                ('header_image', models.ImageField(upload_to='headerImage/')),
                ('mobile', models.CharField(default='000-000-0000', max_length=15, verbose_name='Mobile Number')),
                ('address', models.CharField(max_length=255)),
                ('email', models.EmailField(default='default@example.com', max_length=254)),
                ('password', models.CharField(default='', max_length=100)),
                ('state', models.CharField(default='Some Default State', max_length=100)),
                ('cuisine', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('opening_hours', models.CharField(max_length=100)),
                ('minimum_order_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('delivery_charge', models.DecimalField(decimal_places=2, max_digits=10)),
                ('estimated_delivery_time', models.CharField(max_length=50)),
                ('branch_status', models.CharField(max_length=50)),
                ('menuItems', models.ManyToManyField(to='restaurants.MenuItem')),
            ],
        ),
    ]