from django.urls import path
from . import views

urlpatterns = [
# meals urls
    path('meals/', views.meal_list),
    path('meals/<int:pk>/', views.meal_detail),
    path('meals/create/', views.meal_create),
    path('meals/update/<int:pk>/', views.meal_update),
    path('meals/delete/<int:pk>/', views.meal_delete),

# customer urls
    path('customers/', views.customer_list),
    path('customers/<int:pk>/', views.customer_detail),
    path('customers/create/', views.customer_create),
    path('customers/update/<int:pk>/', views.customer_update),
    path('customers/delete/<int:pk>/', views.customer_delete),

# staff
    path('staff/', views.staff_list),
    path('staff/<int:pk>/', views.staff_detail),
    path('staff/create/', views.staff_create),
    path('staff/update/<int:pk>/', views.staff_update),
    path('staff/delete/<int:pk>/', views.staff_delete),

# Order
    # path('order/', views.order_list),
    path('order/', views.order_list),
    path('order/<int:pk>/', views.order_detail),
    path('order/create/', views.order_create),
    path('order/update/<int:pk>/', views.order_update),
    path('order/delete/<int:pk>/', views.order_delete),


# Entry
    path('entry/', views.entry_list),
    path('entry/<int:pk>/', views.entry_detail),
    path('entry/create/', views.entry_create),
    path('entry/update/<int:pk>/', views.entry_update),
    path('entry/delete/<int:pk>/', views.entry_delete),
]
