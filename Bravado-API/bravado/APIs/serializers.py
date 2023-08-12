from rest_framework import serializers
from .models import Meal, Customer,Staff ,Order, Entry

class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ['id', 'image', 'name', 'price', 'availability']

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class EntrySerializer(serializers.ModelSerializer):
    fk= OrderSerializer()
    class Meta:
        model = Entry
        fields = '__all__'