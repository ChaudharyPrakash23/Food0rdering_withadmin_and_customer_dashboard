from django.shortcuts import render
from rest_framework.decorators import api_view, parser_classes
from django.contrib.auth import authenticate
from rest_framework.response import Response
from .models import Category,Food
from .serializers import CategorySerializer,FoodSerializer
from rest_framework.parsers import MultiPartParser,FormParser

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
