from django.shortcuts import render
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from rest_framework.response import Response

from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["POST"])
def admin_login(request):
    user = authenticate(
        username=request.data.get("username"),
        password=request.data.get("password")
    )

    if user and user.is_staff:
        return Response({"message": "Login successful", "username": user.username},status=200)

    return Response({"message": "Invalid credentials"}, status=401)