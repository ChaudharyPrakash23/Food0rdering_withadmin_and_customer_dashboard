from django.urls import path
from .import views

urlpatterns=[
    path('admin-login/',views.admin_login),
    path('add-category/',views.add_category),
    path('all-categories/',views.list_category)
]