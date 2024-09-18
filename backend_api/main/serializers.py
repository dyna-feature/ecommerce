from rest_framework import serializers
from . import models

class VendorSeralizer(serializers.ModelSerializer):
    class Meta:
        model=models.Vendor
        fields=['id','user', 'address']
        # depth=1

class VendorDetailSeralizer(serializers.ModelSerializer):
    class Meta:
        model=models.Vendor
        fields=['id','user', 'address']
        depth = 1

class ProductSeralizer(serializers.ModelSerializer):
    class Meta:
        model=models.Product
        fields=['id','category','vendor','title', 'detail', 'price']
        # depth = 1

class ProductDetailSerializer(serializers.ModelSerializer):
    # product_ratings ini diambil dari related_name yang ada di ProductRating Models, namanya harus sama
    product_ratings=serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model=models.Product
        fields=['id','category','vendor','title', 'detail', 'price', 'product_ratings']
        depth = 1

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Customer
        fields=['id', 'user' ,'mobile']

class CustomerDetailSerializer(serializers.ModelSerializer):
    rating_customers=serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model=models.Customer
        fields=['id', 'user' ,'mobile', 'rating_customers']
        depth = 1


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Order
        fields=['id', 'customer' ,'order_time']
        depth = 1

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.OrderItems
        fields=['id', 'order' ,'product']
        depth = 1


class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.CustomerAddress
        fields=['id', 'customer' ,'address']
        depth = 1

class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.ProductRating
        fields=['id', 'customer' ,'product', 'rating', 'reviews', 'add_time']
        depth = 1
