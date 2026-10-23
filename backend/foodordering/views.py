from django.shortcuts import render
import random
from rest_framework.decorators import api_view, parser_classes
from django.contrib.auth import authenticate
from rest_framework.response import Response
from .models import Category,Food,User
from .serializers import CategorySerializer,FoodSerializer
from rest_framework.parsers import MultiPartParser,FormParser
from django.contrib.auth.hashers import make_password,check_password
from django.db.models import Q
from django.shortcuts import get_object_or_404

@api_view(["POST"])
def admin_login(request):
    user = authenticate(
        username=request.data.get("username"),
        password=request.data.get("password")
    )

    if user and user.is_staff:
        return Response({"message": "Login successful", "username": user.username},status=200)

    return Response({"message": "Invalid credentials"}, status=401)

@api_view(["POST"])
def add_category(request):
    category_name=request.data.get('category_name')
    Category.objects.create(category_name=category_name)
    return Response({"message":"new category created"},status=201)

@api_view(['GET'])
def list_category(request):
    categories=Category.objects.all()
    serializer=CategorySerializer(categories,many=True)
    return Response(serializer.data)


@api_view(['POST'])
@parser_classes([MultiPartParser,FormParser])
def add_food_item(request):
    serializer=FoodSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Food Item has been added"},status=201)
    print(serializer.errors)
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def list_foods(request):
    foods=Food.objects.all()
    serializer=FoodSerializer(foods,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def food_search(request):
    query=request.GET.get('q','')
    foods=Food.objects.filter(item_name__icontains=query)
    serializer=FoodSerializer(foods,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def random_foods(request):
    foods=list(Food.objects.all())
    random.shuffle(foods)
    limited_foods=foods[0:8]
    serializer=FoodSerializer(limited_foods,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def register_user(request):
    first_name=request.data.get('firstname')
    last_name=request.data.get('lastname')
    mobile=request.data.get('contactno')
    email=request.data.get('email')
    password=request.data.get('password')

    if User.objects.filter(email=email).exists() or User.objects.filter(mobile=mobile).exists():
        return Response({"message":"email or mobile already Registered,please login insted"},status=400);
    User.objects.create(first_name=first_name,last_name=last_name,mobile=mobile,email=email,password=make_password(password))
    return Response ({'message':"User Registered Successfully"},status=201)

@api_view(['POST'])
def login_user(request):
    emailorcontact=request.data.get('emailcont')
    password=request.data.get('password')
    try:
        user=User.objects.get(Q(email=emailorcontact) | Q(mobile=emailorcontact))
        if check_password(password,user.password):
            return Response({"message":"LoggedIn successfully","userId":user.id,"userName":f"{user.first_name}{user.last_name}"},status=200)
        else:
            return Response({"message":"Invalid credentials"},status=401)
    except User.DoesNotExist:
        return Response({"message":"Invalid credentials"},status=401)

@api_view(['GET'])
def food_detail(request,id):
    # food=Food.objects.get(id=id) this can also be done
    food=get_object_or_404(Food,id=id)
    serializer=FoodSerializer(food)
    return Response(serializer.data)
