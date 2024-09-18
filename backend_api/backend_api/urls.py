"""backend_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))

{
    "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0NDg0MTI4LCJpYXQiOjE3MjQ0ODM4MjgsImp0aSI6ImExMjYzMmIzMjEwNjQ5NjQ4YTg4ZDkyNjE5MDcxNmMyIiwidXNlcl9pZCI6MX0.GhHYPt7wjfnKko8hrO_c7q3h8hj4RdjlKjmivQW3W5c",
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcyNDU3MDIyOCwiaWF0IjoxNzI0NDgzODI4LCJqdGkiOiIwNDY2NzQxZDFhMjc0MjdhOTEwNjA0NGU5ZWY5M2ZjMCIsInVzZXJfaWQiOjF9.mG4eNexp-EoKeVG9XDsrH-dl4c_mFVezwFGuKX8uMEs"
}

http http://127.0.0.1:8000/api/vendors/ "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI2Mzg5OTU4LCJpYXQiOjE3MjYzODk2NTgsImp0aSI6ImZmNjQwYTYxNTM3YTRmOTk4MWRkZDIwNGM3Mzk2MmFlIiwidXNlcl9pZCI6MX0.fRgy3V3u8RBs59KmQ3wnZ_a_gZflJcnnIv5-e24mHyg"


"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('main.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
