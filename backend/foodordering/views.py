from django.shortcuts import render
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from rest_framework.response import Response
from .models import Category

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