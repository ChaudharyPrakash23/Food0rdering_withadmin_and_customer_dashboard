from rest_framework import serializers
from .models import Category,Food

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'

class FoodSerializer(serializers.ModelSerializer):
    category_name=serializers.CharField(source='category.category_name',read_only=True)
    image=serializers.ImageField(required=False)
    class Meta:
        model=Food
        fields = ['id','category','category_name','item_name','item_price','item_description','item_quantity','image','is_available',]