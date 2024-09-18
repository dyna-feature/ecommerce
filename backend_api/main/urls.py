from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

# ini ada 2 pendekatan pemanggilan view:
# 1. dengan generic view pake .as_view()
# 2. dengan viewset pake router


router= DefaultRouter()
router.register(r'address', views.CustomerAddressViewset)
router.register(r'productRating', views.ProductRatingViewset)

urlpatterns = [

    path('vendors/',views.VendorList.as_view()),
    path('vendor/<int:pk>/',views.VendorDetailList.as_view()),
    path('products/',views.ProductList.as_view()),
    path('product/<int:pk>/',views.ProductDetailList.as_view()),
    path('customers/',views.CustomerList.as_view()),
    path('customer/<int:pk>/',views.CustomerDetailList.as_view()),
    path('orders/',views.OrderList.as_view()),
    path('order/<int:pk>/',views.OrderDetailList.as_view()),
]

urlpatterns+=router.urls