from rest_framework import generics,permissions,pagination, viewsets
from . import serializers
from . import models

class VendorList(generics.ListCreateAPIView):
    queryset=models.Vendor.objects.all()
    serializer_class=serializers.VendorSeralizer

class VendorDetailList(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Vendor.objects.all()
    serializer_class=serializers.VendorDetailSeralizer
    pagination_class=pagination.PageNumberPagination

class ProductList(generics.ListCreateAPIView):
    queryset=models.Product.objects.all()
    serializer_class=serializers.ProductSeralizer

    # def get_queryset(self):
    #     qs=super().get_queryset()
    #     # category=self.request.GET['category']
    #     category=self.request.GET.get('category')
    #     category=models.ProductCategory.objects.get(id=category)
    #     qs=qs.filter(category=category)
    #     return qs

    def get_queryset(self):
        qs = super().get_queryset()
        category_id = self.request.GET.get('category')

        if category_id:
            qs = qs.filter(category_id=category_id)

        return qs



class ProductDetailList(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Product.objects.all()
    serializer_class=serializers.ProductDetailSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset=models.ProductCategory.objects.all()
    serializer_class=serializers.ProductCategorySerializer

class CustomerList(generics.ListCreateAPIView):
    queryset=models.Customer.objects.all()
    serializer_class=serializers.CustomerSerializer

class CustomerDetailList(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Customer.objects.all()
    serializer_class=serializers.CustomerDetailSerializer

class OrderList(generics.ListCreateAPIView):
    queryset=models.Order.objects.all()
    serializer_class=serializers.OrderSerializer

class OrderDetailList(generics.ListAPIView):
    # queryset=models.OrderItems.objects.all()
    serializer_class=serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id=self.kwargs['pk']
        order=models.Order.objects.get(id=order_id)
        order_items=models.OrderItems.objects.filter(order=order)
        return order_items


class CustomerAddressViewset(viewsets.ModelViewSet):
    serializer_class=serializers.CustomerAddressSerializer
    queryset=models.CustomerAddress.objects.all()


class ProductRatingViewset(viewsets.ModelViewSet):
    serializer_class=serializers.ProductRatingSerializer
    queryset=models.ProductRating.objects.all()

# class ProductCategoryViewset(viewsets.ModelViewSet):
#     serializer_class=serializers.ProductCategorySerializer
#     queryset=models.ProductCategory.objects.all()