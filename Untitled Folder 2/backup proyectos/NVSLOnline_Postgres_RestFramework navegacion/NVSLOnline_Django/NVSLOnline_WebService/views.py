#from django.shortcuts import render
from NVSLOnline.models import Divisions,Seasons,Venues,Teams,Schedules,Players,Roles,TopNavigations
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from  rest_framework.response import Response
from rest_framework.views import APIView
from NVSLOnline_WebService.serializers import DivisionSerializer,SeasonSerializer,VenueSerializer,TeamSerializer,ScheduleSerializer,PlayerSerializer,RoleSerializer,TopNavigationSerializer
from django.core import serializers
import datetime,json
# Create your views here.

class Division(APIView):
    serializer_class = DivisionSerializer
    def get(self, request, id=None, format=None):
        if id!=None:
            divisions = get_object_or_404(Divisions, pk=id)
            many = False
        else:
            divisions = Divisions.objects.filter(IsHidden = False)
            many = True
        response = self.serializer_class(divisions,many=many)
        return Response(response.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            division = Divisions(
                DivisionName = serializer.data['DivisionName'],
                IsHidden = False
            )
            division.save()
            resp = self.serializer_class(division,many=False)
            return Response(resp.data)
            
        else:
           return Response(serializer.errors)

    def put(self, request, id=None, format=None):
        division = get_object_or_404(Divisions, pk=id)
        serializer = self.serializer_class(division, data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, id=None, format=None):
        division = get_object_or_404(Divisions, pk=id)
        division.IsHidden =True
        division.save()
        serializer = self.serializer_class(division,many=False)
        return Response(serializer.data)

        """serializer = self.serializer_class(division,many=False)
        if serializer.is_valid():
            serializer.IsHidden = True
            serializer.save()
            return Response(serializer.data)"""
        """division = Divisions(
                DivisionName = serializer.data['DivisionName'],
                IsHidden = True
            )"""
           
        #resp = self.serializer_class(division,many=False)
        """if serializer.is_valid():
            #serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)"""
            

    """def delete(self, request, id=None, format=None):
        division = get_object_or_404(Divisions, pk=id)
        division.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)"""


division = Division.as_view()
            
class Season(APIView):
    serializer_class = SeasonSerializer
    def get(self, request, id=None, format=None):
        if id!=None:
            seasons = get_object_or_404(Seasons, pk=id)
            many = False
        else:
            seasons = Seasons.objects.filter(IsHidden = False)
            many = True
        response = self.serializer_class(seasons,many=many)
        return Response(response.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            season = Seasons(
                SeasonName = serializer.data['SeasonName'],
                SeasonStart = datetime.datetime.strptime(serializer.data['SeasonStart'],'%Y-%m-%d').date(),
                SeasonEnd = datetime.datetime.strptime(serializer.data['SeasonEnd'],'%Y-%m-%d').date(),
                IsHidden = False
            )
            print(serializer.data)
            season.save()
            resp = self.serializer_class(season,many=False)
            return Response(resp.data)
            
        else:
           return Response(serializer.errors)

    def put(self, request, id=None, format=None):
        season = get_object_or_404(Seasons, pk=id)
        serializer = self.serializer_class(season, data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, id=None, format=None):
        season = get_object_or_404(Seasons, pk=id)
        season.IsHidden =True
        season.save()
        serializer = self.serializer_class(season,many=False)
        return Response(serializer.data)
   

season = Season.as_view()

class SeasonViewSet(viewsets.ViewSet):
    serializer_class = SeasonSerializer
    def inactiveSeason(self, request, format=None):
        seasons = Seasons.objects.filter(IsHidden = False,Active = False)
        response = self.serializer_class(seasons,many=True)
        return Response(response.data)

    def editSeasonActive(self, request, id=None, format=None):
        season = get_object_or_404(Seasons, pk=id)
        season.Active = request.data.get("Active")
        season.save()
        serializer = self.serializer_class(season,many=False)
        return Response(serializer.data)

inactiveSeason = SeasonViewSet.as_view({'get':'inactiveSeason'})
editSeasonActive = SeasonViewSet.as_view({'put':'editSeasonActive'})

class Venue(APIView):
    serializer_class = VenueSerializer
    def get(self, request, id=None, format=None):
        if id!=None:
            venues = get_object_or_404(Venues, pk=id)
            many = False
        else:
            venues = Venues.objects.filter(IsHidden = False)
            many = True
        response = self.serializer_class(venues,many=many)
        return Response(response.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            venue = Venues(
                VenueName = serializer.data['VenueName'],
                IsHidden = False
            )
            venue.save()
            resp = self.serializer_class(venue,many=False)
            return Response(resp.data)
            
        else:
           return Response(serializer.errors)

    def put(self, request, id=None, format=None):
        venue = get_object_or_404(Venues, pk=id)
        serializer = self.serializer_class(venue, data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, id=None, format=None):
        venue = get_object_or_404(Venues, pk=id)
        venue.IsHidden =True
        venue.save()
        serializer = self.serializer_class(venue,many=False)
        return Response(serializer.data)

venue = Venue.as_view()

class Team(APIView):
    serializer_class = TeamSerializer
    def get(self, request, id=None, format=None):
        if id!=None:
            teams = get_object_or_404(Teams, pk=id)
            many = False
        else:
            teams = Teams.objects.filter(IsHidden = False)
            many = True
        response = self.serializer_class(teams,many=many)
        return Response(response.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            team = Teams(
                TeamName = serializer.data['TeamName'],
                #Division= Divisions.objects.get(Id = request.data['DivisionId']),
                #Season = Seasons.objects.get(Id = request.data['SeasonId']),
                DivisionId= get_object_or_404(Divisions, pk= request.data['DivisionId']),
                SeasonId = get_object_or_404(Seasons, pk= request.data['SeasonId']),
                IsHidden = False
            )
            team.save()
            resp = self.serializer_class(team,many=False)
            return Response(resp.data)
            #return Response(serializer.data)
        else:
           return Response(serializer.errors)

    def put(self, request, id=None, format=None):
        team = get_object_or_404(Teams, pk=id)
        serializer = self.serializer_class(team, data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, id=None, format=None):
        team = get_object_or_404(Teams, pk=id)
        team.IsHidden =True
        team.save()
        serializer = self.serializer_class(team,many=False)
        return Response(serializer.data)

   
team = Team.as_view()

class Player(APIView):
    serializer_class = PlayerSerializer
    def get(self, request, id=None, format=None):
        if id!=None:
            players = get_object_or_404(Players, pk=id)
            many = False
        else:
            players = Players.objects.filter(IsHidden = False)
            many = True
        response = self.serializer_class(players,many=many)
        return Response(response.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            player = Players(
                FirstName = serializer.data['FirstName'],
                LastName = serializer.data['LastName'],
                TeamId = get_object_or_404(Teams, pk= request.data['TeamId']),
                IsHidden = False
            )
            player.save()
            resp = self.serializer_class(player,many=False)
            return Response(resp.data)
            #return Response(serializer.data)
        else:
           return Response(serializer.errors)

   
player = Player.as_view()


"""class DivisionViewset(viewsets.ModelViewSet):
    serializer_class = DivisionSerializer
    queryset = Divisions.objects.filter(IsHidden = False)
    lookup_field = 'Id'
"""

"""class TeamViewset(viewsets.ModelViewSet):
    serializer_class = TeamSerializer
    queryset = Teams.objects.filter(IsHidden = False)
    lookup_field = 'Id'

    #def list(self,request,*args,**kwargs):
    #    return super(TeamViewset,self).list(request,*args,**kwargs)

   # def create(self,request,*args, **kwargs):
   #     serializer = self.get_serializer(data = request.data)
"""

class Schedule(APIView):
    serializer_class = ScheduleSerializer
    def get(self, request, id=None, format=None):
        if id!=None:
            schedules = get_object_or_404(Schedules, pk=id)
            many = False
        else:
            schedules = Schedules.objects.filter(IsHidden = False)
            many = True
        response = self.serializer_class(schedules,many=many)
        return Response(response.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            schedule = Schedules(
                SeasonId = Seasons.objects.get(Id = request.data['SeasonId']),
                DivisionId = Divisions.objects.get(Id = request.data['DivisionId']),
                VenueId = Venues.objects.get(Id = request.data['VenueId']),
                Status = serializer.data['Status'],
                #DateTime = serializer.data['DateTime'],
                HomeTeamId = Teams.objects.get(Id = request.data['HomeTeamId']),
                GoalsHomeTeam = serializer.data['GoalsHomeTeam'],
                AwayTeamId = Teams.objects.get(Id = request.data['AwayTeamId']),
                GoalsAwayTeam = serializer.data['GoalsAwayTeam'],
                IsHidden = False
            )
            schedule.save()
            resp = self.serializer_class(schedule,many=False)
            return Response(resp.data)
        else:
           return Response(serializer.errors)

schedule = Schedule.as_view()

class ScheduleViewSet(viewsets.ViewSet):
    serializer_class = SeasonSerializer
    def editScheduleScore(self, request, id=None, format=None):
        schedule = get_object_or_404(Schedules, pk=id)
        schedule.GoalsHomeTeam = request.data.get("GoalsHomeTeam")
        schedule.GoalsAwayTeam = request.data.get("GoalsAwayTeam")
        schedule.save()
        serializer = self.serializer_class(schedule,many=False)
        return Response(serializer.data)

editScheduleScore = SeasonViewSet.as_view({'put':'editScheduleScore'})

class Standing(APIView):
    serializer_class = TeamSerializer
    def get(self, request, id=None, format=None):
        lstStanding = []
        teams = Teams.objects.filter(IsHidden = False)
        #teamsTest = Teams.objects.filter(IsHidden = False).select_related('SeasonId','DivisionId')
        #teamsTest = Teams.objects.filter(IsHidden = False)
        #response = self.serializer_class(teamsTest,many=True)
        #teams2 = response.data
        #print(response)
        #for k,v in teams2.OrderedDict:
        #    print(k,v)
        data = serializers.serialize("json", Teams.objects.filter(IsHidden = False))
       # print(json.loads(data))

        for team in json.loads(data):
             
            fieldsTeam = team['fields']
            objSeason = serializers.serialize("json", Seasons.objects.filter(Id = fieldsTeam['SeasonId']))
            objDivision = serializers.serialize("json", Divisions.objects.filter(Id = fieldsTeam['DivisionId']))
            
            teamsEnJuego = Schedules.objects.filter(HomeTeamId = team['pk'], AwayTeamId = team['pk'])
            #print(team)
            standing = {}
            standing["SeasonId"] = fieldsTeam['SeasonId']
            standing["Season"] = json.loads(objSeason)[0]['fields']
            standing["DivisionId"] = fieldsTeam['DivisionId']
            standing["Division"] = json.loads(objDivision)[0]['fields']

            standing["TeamName"] = fieldsTeam['TeamName']
            standing["Wins"] = 0
            standing["Losses"] = 0
            standing["Ties"] = 0
            standing["Points"] = 0
            standing["GoalsFor"] = 0
            standing["GoalsAgainst"] = 0

            for teamEnJuego in teamsEnJuego:
                if team.Id == teamEnJuego.HomeTeamId:
                    standing["GoalsFor"] += teamEnJuego.GoalsHomeTeam;
                    standing["GoalsAgainst"] += teamEnJuego.GoalsAwayTeam;

                    if teamEnJuego.GoalsHomeTeam > teamEnJuego.GoalsAwayTeam:
                        standing["Wins"] += 1;
                        standing["Points"] += 3;
                    
                    if teamEnJuego.GoalsHomeTeam < teamEnJuego.GoalsAwayTeam:
                        standing["Losses"] += 1;
                        
                    if teamEnJuego.GoalsHomeTeam == teamEnJuego.GoalsAwayTeam and teamEnJuego.GoalsHomeTeam != null:
                        standing["Ties"] += 1;
                        standing["Points"] += 1;
                else:
                    standing["GoalsFor"] += teamEnJuego.GoalsAwayTeam;
                    standing["GoalsAgainst"] += teamEnJuego.GoalsHomeTeam;
                    if teamEnJuego.GoalsAwayTeam > teamEnJuego.GoalsHomeTeam:
                        standing["Wins"] += 1;
                        standing["Points"] += 3;
                    if teamEnJuego.GoalsAwayTeam < teamEnJuego.GoalsHomeTeam:
                        standing["Losses"] += 1;
                    if teamEnJuego.GoalsAwayTeam == teamEnJuego.GoalsHomeTeam and teamEnJuego.GoalsHomeTeam != null:
                        standing["Ties"] += 1;
                        standing["Points"] += 1;
                        
            standing["Differential"] = standing["GoalsFor"] - standing["GoalsAgainst"];
            #lstStanding.push(standing) #array_push($lstStanding,$standing);
            #lstStanding.append(standing)
            lstStanding.append(standing.copy())
            
        #data = serializers.serialize('json', lstStanding)
        #return HttpResponse(data, content_type='aplication/json')
            #return HttpResponse(data, mimetype="application/json")
        #print(lstStanding)
        return Response(lstStanding)

standing = Standing.as_view()

###################################### CONFIGURATION #########################################

class Role(APIView):
    serializer_class = RoleSerializer
    def get(self, request, id=None, format=None):
        if id!=None:
            roles = get_object_or_404(Roles, pk=id)
            many = False
        else:
            roles = Roles.objects.filter(IsHidden = False)
            many = True
        response = self.serializer_class(roles,many=many)
        return Response(response.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            role = Roles(
                RoleName = serializer.data['RoleName'],
                LoweredRoleName = serializer.data['RoleName'].lower(),
                Description = serializer.data['Description'],
                #UserId = serializer.data['UserId'],
                IsHidden = False
            )
            role.save()
            resp = self.serializer_class(role,many=False)
            return Response(resp.data)
            
        else:
           return Response(serializer.errors)

role = Role.as_view()

class TopNavigation(APIView):
    serializer_class = TopNavigationSerializer
    def get(self, request, id=None, format=None):
        if id!=None:
            navigation = get_object_or_404(TopNavigations, pk=id)
            many = False
        else:
            navigation = TopNavigations.objects.filter(IsHidden = False)
            many = True
        response = self.serializer_class(navigation,many=many)
        return Response(response.data)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            navigation = TopNavigations(
                TopMenu= serializer.data['TopMenu'],
                TopMenuDescription = serializer.data['TopMenuDescription'],
                TopMenuLink = serializer.data['TopMenuLink'],
                TopMenuOrder = serializer.data['TopMenuOrder'],
                TopParentId = serializer.data['TopParentId'],
                TopMenuExternal = serializer.data['TopMenuExternal'],
                
                RoleId = get_object_or_404(Roles, pk= request.data['RoleId']),
                IsHidden = False
            )
            navigation.save()
            resp = self.serializer_class(navigation,many=False)
            return Response(resp.data)
            #return Response(serializer.data)
        else:
           return Response(serializer.errors)

    def put(self, request, id=None, format=None):
        topNavigation = get_object_or_404(TopNavigations, pk=id)
        serializer = self.serializer_class(topNavigation, data=request.data)# request.POST y request.GET, request.FILES
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, id=None, format=None):
        topNavigation = get_object_or_404(TopNavigations, pk=id)
        topNavigation.IsHidden =True
        topNavigation.save()
        serializer = self.serializer_class(topNavigation,many=False)
        return Response(serializer.data)

   
topNavigation = TopNavigation.as_view()