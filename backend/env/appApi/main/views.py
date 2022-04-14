import razorpay
from rest_framework.response import Response
from .models import User,NGO,Donor
from django.http import HttpResponse
from .serializers import DonorSerializers,NGOSerializers,UserRegisteration,UserLoginSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import authenticate
from .renderers import UserRenderer

from rest_framework_simplejwt.tokens import RefreshToken


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserAPIView(APIView):

    renderer_classes = [UserRenderer]

    def get(self,request):
        user = User.objects.all()
        serializer = UserRegisteration(user,many=True)

        return Response(serializer.data)
        

    def post(self,request,fromat=None):
        serializer = UserRegisteration(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({'message':'Registration Successful','token':token},status=status.HTTP_201_CREATED)

        
        return HttpResponse(serializer.errors,status=status.HTTP_404_NOT_FOUND)


class UserLoginView(APIView):

    def post(self,request,format=None):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(email=email,password=password)

            if user is not None:
                token = get_tokens_for_user(user)
                return Response({'message':'Login Success','token':token},status=status.HTTP_200_OK)
            else :
                return Response({'errors':{'non_field_errors':['Email or password is not Valid']}},status=status.HTTP_404_NOT_FOUND)
            


                
        


class NGOAPIView(APIView):

    parser_classes = [MultiPartParser,FormParser]

    def get(self,request):
        ngo = NGO.objects.all()
        serializer = NGOSerializers(ngo,many=True)

        return Response(serializer.data)

    def post(self,request,*args,**kwargs):
        name = request.data['name']
        email = request.data['email']
        org = request.data['org']
        title = request.data['title']
        address = request.data['address']
        description = request.data['description']
        imageNGO = request.data['imageNGO']
        NGO.objects.create(name=name,email=email,org=org,title=title,address=address,description=description,imageNGO=imageNGO)
        return Response({'message':'New field Created'},status=status.HTTP_201_CREATED)

    

class NGODetailAPIView(APIView):

    parser_classes = [MultiPartParser,FormParser]

    def get_object(self,pk):
        try:
            return NGO.objects.get(pk=pk)
        except NGO.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)


    def get(self,request,pk):
        ngo = self.get_object(pk)
        serializer = NGOSerializers(ngo)
        return Response(serializer.data)

    def put(self,request,pk):
        ngo = self.get_object(pk)
        serializer = NGOSerializers(ngo,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,  status=status.HTTP_404_BAD_REQUEST) 

    def delete(self,request,pk):
        ngo = self.get_object(pk)
        ngo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




class DonorAPIView(APIView):

    def get(self,request):
        donor = Donor.objects.all()
        serializer = DonorSerializers(donor,many=True)

        return Response(serializer.data)

    def post(self,request,*args,**kwargs):
        name = request.data['name']
        email = request.data['email']
        phoneNum = request.data['phoneNum']
        address = request.data['address']
        description = request.data['description']
        title = request.data['title']
        imageDonor = request.data['imageDonor']

        Donor.objects.create(name=name,email=email,phoneNum=phoneNum,address=address,description=description,title=title,imageDonor=imageDonor)
        return Response({'message':'New field Created'},status=status.HTTP_201_CREATED)
        

    

class DonorDetailAPIView(APIView):

    parser_classes = [MultiPartParser,FormParser]

    def get_object(self,pk):
        try:
            return Donor.objects.get(pk=pk)
        except Donor.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)


    def get(self,request,pk):
        donor = self.get_object(pk)
        serializer = DonorSerializers(donor)
        return Response(serializer.data)

    def put(self,request,pk):
        donor = self.get_object(pk)
        serializer = DonorSerializers(donor,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,  status=status.HTTP_404_BAD_REQUEST) 

    def delete(self,request,pk):
        donor = self.get_object(pk)
        donor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
