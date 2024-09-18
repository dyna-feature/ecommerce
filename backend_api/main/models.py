from django.db import models
from django.contrib.auth.models import User

# vendor models
class Vendor(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    address=models.TextField(null=True)

    def __str__(self):
        return self.user.username

# product category models
class ProductCategory(models.Model):
    title=models.CharField(max_length=200)
    detail=models.TextField(null=True)

    def __str__(self):
        return self.title

# product models
class Product(models.Model):
    category=models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True, related_name='category_product')
    vendor=models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    title=models.CharField(max_length=200)
    detail=models.TextField(null=True)
    price=models.FloatField()

    def __str__(self):
        return self.title

#Custumer Model
class Customer(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    mobile=models.PositiveBigIntegerField()

    def __str__(self):
        return self.user.username

#Order Model
class Order(models.Model):
    customer=models.ForeignKey(Customer,on_delete=models.CASCADE)
    order_time=models.DateTimeField(auto_now_add=True)

#Order Item Model , jadi 1 order bisa banyak item berdasarkan customer
class OrderItems(models.Model):
    order=models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product=models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.title


class CustomerAddress(models.Model):
    customer=models.ForeignKey(Customer, on_delete=models.CASCADE,)
    address=models.TextField()
    default_address=models.BooleanField(default=False)

    def __str__(self):
        return self.address

class ProductRating(models.Model):
    customer=models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='rating_customers')
    product=models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_ratings')
    rating=models.IntegerField()
    reviews=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        # my_dict = {
        #     'product_name':self.product.title,
        #     'customer_rating':self.rating,
        #     'review':self.reviews
        #     }
        # return f'{my_dict}'
        return f'{self.product.title} -{self.rating} - {self.reviews}'







