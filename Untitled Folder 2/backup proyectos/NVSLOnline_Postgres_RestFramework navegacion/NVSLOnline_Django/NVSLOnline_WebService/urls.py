from django.conf.urls import url
#from NVSLOnline_WebService.views import Division,Season,Venue,Team,Schedule,DivisionViewset
from NVSLOnline_WebService import views as NVSLOnline_Views

urlpatterns = [
    #url(r'^admin/', admin.site.urls),
    ################################## DIVISION ##################################
    #url(r'^api/divisions/$', Division.as_view(), name='getDivisions'),
    url(r'^api/divisions/?$', NVSLOnline_Views.division, name='getDivisions'),
    #url(r'^api/divisions/$', DivisionViewset.as_view({'get':'list'}), name='getDivisions'),
    url(r'^api/divisions/(?P<id>\d+)/?$', NVSLOnline_Views.division, name='getDivisionsId'),

    ################################## SEASONS ##################################
    url(r'^api/seasons/?$', NVSLOnline_Views.season, name='get_season'),
    url(r'^api/seasons/inactive/?$', NVSLOnline_Views.inactiveSeason, name='get_season'),
    url(r'^api/seasons/(?P<id>\d+)/?$', NVSLOnline_Views.season, name='getSeasonsId'),
    url(r'^api/seasons/seasonActive/(?P<id>\d+)/?$', NVSLOnline_Views.editSeasonActive, name='getSeasonsId'),

    ################################## VENUES ##################################

    url(r'^api/venues/?$', NVSLOnline_Views.venue, name='get_venues'),
    url(r'^api/venues/(?P<id>\d+)/?$', NVSLOnline_Views.venue, name='getVenuesId'),


    ################################## TEAMS ##################################
    url(r'^api/teams/?$', NVSLOnline_Views.team, name='get_team'),
    url(r'^api/teams/(?P<id>\d+)/?$', NVSLOnline_Views.team, name='getTeamId'),

    ################################## PLAYERS ##################################
    url(r'^api/players/?$', NVSLOnline_Views.player, name='get_player'),
    url(r'^api/players/(?P<id>\d+)/?$', NVSLOnline_Views.player, name='getPlayerId'),

    ################################## SCHEDULES ##################################
    url(r'^api/schedules/?$', NVSLOnline_Views.schedule, name='get_schedule'),
    url(r'^api/schedules/(?P<id>\d+)/?$', NVSLOnline_Views.schedule, name='getScheduleId'),
    url(r'^api/schedules/scheduleScore/(?P<id>\d+)/?$', NVSLOnline_Views.editScheduleScore, name='editScheduleScore'),

    ################################## STANDINGS ##################################
    url(r'^api/standings/?$', NVSLOnline_Views.standing, name='get_standing'),

    ################################## Roles ##################################
    url(r'^api/roles/?$', NVSLOnline_Views.role, name='get_roles'),

    ################################## TopNavigation ##################################
    url(r'^api/topNavigation/?$', NVSLOnline_Views.topNavigation, name='get_topNavigation'),
    url(r'^api/topNavigation/(?P<id>\d+)/?$', NVSLOnline_Views.topNavigation, name='get_topNavigationId'),
]