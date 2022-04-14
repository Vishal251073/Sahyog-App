from django.contrib.auth.models import BaseUserManager,AbstractBaseUser
from django.db import models
from django.core.validators import MinLengthValidator

class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None,password2=None):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('User must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email,
            password=password,
            name=name,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email',
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin


    
# class Payment(models.Mode)







    












class NGO(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=50)
    org = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    title = models.CharField(max_length=20,default="")
    description = models.TextField(validators=[MinLengthValidator(50)])
    imageNGO = models.ImageField(upload_to='main/static',default="",blank=True,null=True)

    def __str__(self):
        return self.org

class Donor(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=50)
    phoneNum = models.IntegerField()
    address = models.CharField(max_length=100)
    description = models.TextField(validators=[MinLengthValidator(50)])
    title = models.CharField(max_length=20,default="")
    imageDonor = models.ImageField(upload_to='main/static',default="")

    def __str__(self):
        return self.name
