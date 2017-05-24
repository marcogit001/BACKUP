from NVSLOnline.models import Divisions
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

class DivisionSerializer(ModelSerializer):
    class Meta:
        model = Divisions
        fields = ('Id','DivisionName','IsHidden')

class UserLoginSerializer(ModelSerializer):
    token = CharField(allow_blank=True, read_only=True)
    username = CharField()
    email = EmailField(label='Email Address')
    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password',
            'token',
        ]