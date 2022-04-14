
from rest_framework import serializers

from .models import User,NGO,Donor

class UserRegisteration(serializers.ModelSerializer):

    password2 = serializers.CharField(style={'input_type':'password'},write_only=True)

    class Meta:
        model = User
        fields = ['email','name','password','password2']
        extra_kwargs={
            'password':{'write_only':True}
        }


    def validate(self,attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')

        if password!=password2:
            raise serializers.ValidationError("Password and Confrim Password doesn't Matches")

        return attrs

    def create(self,validate_data):
        return User.objects.create_user(**validate_data)



class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = User
        fields = ['email','password']
        

class NGOSerializers(serializers.ModelSerializer):
    name = serializers.CharField()
    email = serializers.EmailField()
    org = serializers.CharField()
    address = serializers.CharField()
    description = serializers.CharField()
    imageNGO = serializers.ImageField()
    title = serializers.CharField(max_length=20)

    def craete(self,validated_data):
        return NGO.objects.create(**validated_data)


    def update(self,instance,validated_data):
        instance.name = validated_data.get('name',instance.name)
        instance.email = validated_data.get('email',instance.email)
        instance.org = validated_data.get('org',instance.org)
        instance.address = validated_data.get('address',instance.address)
        instance.description = validated_data.get('description',instance.description)
        instance.title = validated_data.get('title',instance.title)
        instance.imageNGO = serializers.get('imageNGO',instance.imageNGO)

        instance.save()
        return instance

    class Meta:
        model = NGO
        fields = ('name','email','org','address','description','title','imageNGO')


class DonorSerializers(serializers.ModelSerializer):
    name = serializers.CharField()
    email = serializers.EmailField()
    phoneNum = serializers.IntegerField()
    address = serializers.CharField()
    description = serializers.CharField()
    title = serializers.CharField(max_length=20)
    imageDonor = serializers.ImageField()


    def craete(self,validated_data):
        return Donor.objects.create(**validated_data)

    def update(self,instance,validated_data):
        instance.name = validated_data.get('name',instance.name)
        instance.email = validated_data.get('email',instance.email)
        instance.phoneNum = validated_data.get('phoneNum',instance.phoneNum)
        instance.address = validated_data.get('address',instance.address)
        instance.description = validated_data.get('description',instance.description)
        instance.title = validated_data.get('title',instance.title)
        instance.imageDonor = validated_data.get('imageDonor',instance.imageDonor)

        instance.save()
        return instance

    class Meta:
        model = Donor
        fields = ('name','email','phoneNum','address','description','title','imageDonor')



