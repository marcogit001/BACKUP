'use strict';
//angular.module('nvslonlineAppApp').value("webUrl", "http://pc-sp20131/nvslonlineApi/")
angular.module('nvslonlineAppApp').value("webUrl", "http://localhost:8000/")

angular.module('nvslonlineAppApp').value("debug", true)

angular.module('nvslonlineAppApp').config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('main', {
        url: '/',
        templateUrl: '/views/main.html'
    })
    .state('team', {
        url: '/team',
        templateUrl: '/views/team.html',
        controller: 'TeamCtrl as vm'
    })
    .state('schedule', {
        url: '/schedule',
        templateUrl: '/views/schedule.html',
        controller: 'ScheduleCtrl as vm'
    })
    .state('standing', {
        url: '/standings',
        templateUrl: '/views/standing.html',
        controller: 'StandingCtrl as vm'
    })
    .state('division', {
        url: '/division',
        templateUrl: '/views/division.html',
        controller: 'DivisionCtrl as vm'
    })

    .state('login', {
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl as vm'
    })

    /********************* ADMIN USER ******************/

    .state('adminDivision', {
        url: '/ADivisions',
        templateUrl: '/views/a_division.html',
        controller: 'ADivisionCtrl as vm'
    })

    .state('adminSeason', {
        url: '/ASeasons',
        templateUrl: '/views/a_season.html',
        controller: 'ASeasonCtrl as vm'
    })

    .state('adminVenue', {
        url: '/AVenues',
        templateUrl: '/views/a_venue.html',
        controller: 'AVenueCtrl as vm'
    })

    .state('adminTeam', {
        url: '/ATeams',
        templateUrl: '/views/a_team.html',
        controller: 'ATeamCtrl as vm'
    })

    .state('adminSchedule', {
        url: '/ASchedules',
        templateUrl: '/views/a_schedule.html',
        controller: 'AScheduleCtrl as vm'
    })


    /***************** CONTRIBUIDOR USER ***************/
    
    
    .state('contribuidorSchedule', {
        url: '/CSchedules',
        templateUrl: '/views/c_schedule.html',
        controller: 'CScheduleCtrl as vm'
    })


    /***************** CONFIGURATION ***************/

    .state('topNavigation', {
        url: '/Navigation',
        templateUrl: '/views/top_navigation_setting.html',
        controller: 'TopNavigationSettingCtrl as vm'
    })

    /***************** USERS ***************/

    .state('register', {
        url: '/register',
        templateUrl: '/views/register.html',
        controller: 'RegisterCtrl'
    });

})