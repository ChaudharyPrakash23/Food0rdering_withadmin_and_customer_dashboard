from django.urls import path
from .import views

urlpatterns=[
    path('admin-login/',views.admin_login),
    path('add-category/',views.add_category),
    path('all-categories/',views.list_category),
    path('add-food-item/',views.add_food_item),
    path('all-foods/',views.list_foods)
]