from django.db import models
import random
import string

class Meal(models.Model):
    image = models.ImageField(upload_to='meals/')
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    availability = models.BooleanField(default=True)

    def __str__(self):
        return f' {self.name}'

class Customer(models.Model):
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)
    contact = models.CharField(max_length=10, unique=True)
    address = models.CharField(max_length=15)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f' {self.first_name} {self.last_name}'

class Staff(models.Model):
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)
    duty = models.CharField(max_length=15)
    contact = models.CharField(max_length=10, unique=True)
    address = models.CharField(max_length=15)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f' {self.first_name} {self.last_name}'
    
def order_number_generator():
    res =''.join( random.choices(string.ascii_uppercase + string.digits, k=6))
    od= "BF-"+ str(res)
    return od

class Order(models.Model):

    PAYMENT_METHODS = [
        ("C", "Cash"),
        ("M", "Mpesa"),
    ]

    order_number = models.CharField(max_length=10, unique=True, default= order_number_generator, editable= False)
    order_sub_total= models.CharField(max_length=6)
    delivery=models.BooleanField(default= False)
    order_grand_total= models.CharField(max_length=6)
    # payment_method=models.Choices(choices= PAYMENT_METHODS)
    customer_name =models.CharField(max_length=15)
    staff_name =models.CharField(max_length=15)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.order_number}'

class Entry(models.Model):
    product_name=models.CharField(max_length=25)
    product_quantity=models.CharField(max_length=2)
    product_sub_total=models.CharField(max_length=6)
    fk= models.ForeignKey(Order, on_delete = models.CASCADE, related_name='order_entrys')

    def __str__(self):
        return f' {self.product_name}'
  