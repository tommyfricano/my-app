from rest_framework import serializers
from members.models import User

class UserSerializer(serializers.ModelSerializer):
   class Meta:
       model = User
       fields = ('name', 'password', 'latitude', 'longitude', 'points')