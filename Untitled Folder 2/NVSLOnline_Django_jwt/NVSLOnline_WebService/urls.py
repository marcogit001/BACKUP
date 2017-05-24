from django.conf.urls import url
#from NVSLOnline_WebService.views import Division,Season,Venue,Team,Schedule,DivisionViewset
from NVSLOnline_WebService import views as NVSLOnline_Views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^api/divisions/?$', NVSLOnline_Views.division, name='getDivisions'),
    
    url(r'^api/divisions/(?P<id>\d+)/?$', NVSLOnline_Views.division, name='getDivisionsId'),

     url(r'^api/auth/token/', obtain_jwt_token),
]