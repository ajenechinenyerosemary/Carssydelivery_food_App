# # Generated by Django 5.0.7 on 2024-07-18 17:10

# from django.db import migrations, models


# class Migration(migrations.Migration):

#     dependencies = [
#         ('restaurants', '0001_initial'),
#     ]

#     operations = [
#         migrations.AlterField(
#             model_name='restaurant',
#             name='header_image',
#             field=models.ImageField(upload_to='headerImage/'),
#         ),
#         migrations.AlterField(
#             model_name='restaurant',
#             name='logo',
#             field=models.ImageField(upload_to='logo/'),
#         ),
#     ]


# Generated by Django 5.0.7 on 2024-07-18 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='header_image',
            field=models.ImageField(upload_to='headerImage/'),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='logo',
            field=models.ImageField(upload_to='logo/'),
        ),
        migrations.AddField(
            model_name='restaurant',
            name='email',
            field=models.EmailField(max_length=254, default='default@example.com'),
        ),
    ]

