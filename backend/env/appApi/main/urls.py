from django.urls import path,include
from .views import DonorAPIView,DonorDetailAPIView,NGOAPIView,NGODetailAPIView,UserLoginView,MyTokenObtainPairView,UserAPIView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns = [
    path('user/',UserAPIView.as_view()),
    path('login/',UserLoginView.as_view()),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('ngo/',NGOAPIView.as_view()),
    path('ngodetail/<int:pk>',NGODetailAPIView.as_view()),
    path('donor/',DonorAPIView.as_view()),
    path('donordetail/<int:pk>',DonorDetailAPIView.as_view()),
]