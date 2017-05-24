from NVSLOnline.models import Divisions,Seasons,Venues,Teams,Schedules,Players,Roles,TopNavigations
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

class DivisionSerializer(ModelSerializer):
    class Meta:
        model = Divisions
        fields = ('Id','DivisionName','IsHidden')
        #read_only_fields = ('Id')

class SeasonSerializer(ModelSerializer):
    SeasonStart = serializers.DateField()
    #SeasonStart = serializers.DateTimeField()
    #SeasonEnd = serializers.DateField(input_formats=(['%m/%d/%Y %I:%M %p','iso-8601']))
    SeasonEnd = serializers.DateField()
    class Meta:
        model = Seasons
        fields = ('Id','SeasonName','Active','IsHidden','SeasonStart','SeasonEnd')
        #read_only_fields = ('Id')

class VenueSerializer(ModelSerializer):
    class Meta:
        model = Venues
        fields = ('Id','VenueName','IsHidden')
        #read_only_fields = ('Id')

class TeamSerializer(ModelSerializer):
    
    Division = DivisionSerializer(source='DivisionId',read_only=True)
    Season = SeasonSerializer(source='SeasonId',read_only=True)
    class Meta:
        model = Teams
        fields = ('Id','TeamName','IsHidden','DivisionId','Division','SeasonId','Season') 

class PlayerSerializer(ModelSerializer):
    
    Team = TeamSerializer(source='TeamId',read_only=True)
    class Meta:
        model = Players
        fields = ('Id','FirstName','LastName','IsHidden','TeamId','Team') 

class ScheduleSerializer(ModelSerializer):
    Division = DivisionSerializer(source='DivisionId',read_only=True)
    Season = SeasonSerializer(source='SeasonId',read_only=True)
    Venue = VenueSerializer(source='VenueId',read_only=True)
    HomeTeam = TeamSerializer(source='HomeTeamId',read_only=True)
    AwayTeam = TeamSerializer(source='AwayTeamId',read_only=True)

    class Meta:
        model = Schedules
        fields = ('Id', 'SeasonId', 'Season','DivisionId', 'Division' ,'VenueId','Venue','Status','DateTime','HomeTeamId','HomeTeam','GoalsHomeTeam','AwayTeamId','AwayTeam','GoalsAwayTeam','IsHidden')
        #read_only_fields = ('Id')

######################################## CONFIGURATION #############################################

class RoleSerializer(ModelSerializer):
    class Meta:
        model = Roles
        fields = ('Id','RoleName','LoweredRoleName','Description','IsHidden')


class TopNavigationSerializer(ModelSerializer):
    Role = RoleSerializer(source='RoleId',read_only=True) 
      
    class Meta:
        model = TopNavigations
        fields = ('Id','TopMenu','TopMenuDescription','TopMenuLink','TopMenuOrder','TopParentId','TopMenuExternal','IsHidden','RoleId','Role')