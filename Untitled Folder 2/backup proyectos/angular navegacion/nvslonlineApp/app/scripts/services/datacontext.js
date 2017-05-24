'use strict';

/**
 * @ngdoc service
 * @name nvslonlineAppApp.datacontext
 * @description
 * # datacontext
 * Service in the nvslonlineAppApp.
 */
angular.module('nvslonlineAppApp')
  .service('datacontext', function ($http) {
    

    /********************************* Division *******************************/
    this.getDivisions = function (webUrl) {
        return $http({
            method: 'GET',
            //withCredentials: true,
            data: 'json',
            url: webUrl +  'api/divisions/?format=json'
        });
    };

 this.addDivision = function (webUrl, objDivision) {
        return $http({
            method: 'POST',
            url: webUrl +  'api/divisions',
            data: objDivision
        });
    };

this.editDivision = function (webUrl,objDivision) {
        return $http({
            method: 'PUT',
            url: webUrl +  'api/divisions/' + objDivision.Id,
            //withCredentials: true,
           data: objDivision
        });

    };

 this.deleteDivision = function (webUrl,objDivision) {
        return $http({
            method: 'DELETE',
            url: webUrl +  'api/divisions/' + objDivision.Id,
            //withCredentials: true,
           data: objDivision
        });

    };
    /*********************************** Team *********************************/

    this.getTeams = function (webUrl) {
        return $http({
            method: 'GET',
            //withCredentials: true,
            data: 'json',
            url: webUrl +  'api/teams'
        });
    };

    this.addTeam = function (webUrl, objTeam) {
        return $http({
            method: 'POST',
            url: webUrl +  'api/teams',
            data: objTeam,
            //withCredentials: true,
        });
    };

    this.editTeam = function (webUrl,objTeam) {
        return $http({
            method: 'PUT',
            url: webUrl +  'api/teams/' + objTeam.Id,
            //withCredentials: true,
           data: objTeam
        });

    };

    this.deleteTeam = function (webUrl,objTeam) {
        return $http({
            method: 'DELETE',
            url: webUrl +  'api/teams/' + objTeam.Id,
            //withCredentials: true,
           data: objTeam
        });

    };


    /********************************* Seasons *******************************/
    this.getSeasons = function (webUrl) {
        return $http({
            method: 'GET',
            //withCredentials: true,
            data: 'json',
            url: webUrl +  'api/seasons'
        });
    };

    this.getSeasonNoActive = function (webUrl) {
        return $http({
            method: 'GET',
            //withCredentials: true,
            data: 'json',
            url: webUrl +  'api/seasons/inactive'
        });
    };

    this.addSeason = function (webUrl, objSeason) {
        return $http({
            method: 'POST',
            url: webUrl +  'api/seasons',
            data: objSeason,
            //withCredentials: true,
        }).then(function successCallback(response){
            console.log(response);
        },function errorCallback(response){
            console.log(response);
        });
    };

    this.editSeason = function (webUrl,objSeason) {
        return $http({
            method: 'PUT',
            url: webUrl +  'api/seasons/' + objSeason.Id,
            //withCredentials: true,
           data: objSeason
        });

    };

    this.deleteSeason = function (webUrl,objSeason) {
        return $http({
            method: 'DELETE',
            url: webUrl +  'api/seasons/' + objSeason.Id,
            //withCredentials: true,
           data: objSeason
        });

    };

    /********************************* Venues *******************************/
    this.getVenues = function (webUrl) {
        return $http({
            method: 'GET',
            //withCredentials: true,
            data: 'json',
            url: webUrl +  'api/venues'
        });
    };

    this.addVenue = function (webUrl, objVenue) {
        return $http({
            method: 'POST',
            url: webUrl +  'api/venues',
            data: objVenue,
            //withCredentials: true,
        }).then(function successCallback(response){
            console.log(response);
        },function errorCallback(response){
            console.log(response);
        });
    };

    this.editVenue = function (webUrl,objVenue) {
        return $http({
            method: 'PUT',
            url: webUrl +  'api/venues/' + objVenue.Id,
            //withCredentials: true,
           data: objVenue
        });

    };

    this.deleteVenue = function (webUrl,objVenue) {
        return $http({
            method: 'DELETE',
            url: webUrl +  'api/venues/' + objVenue.Id,
            //withCredentials: true,
           data: objVenue
        });

    };

    /********************************* Schedules *******************************/

    this.getSchedules = function (webUrl) {
        return $http({
            method: 'GET',
            //withCredentials: true,
            data: 'json',
            url: webUrl +  'api/schedules'
        });
    };

    /********************************* Standings *******************************/

    this.getStandings = function (webUrl) {
        return $http({
            method: 'GET',
            //withCredentials: true,
            data: 'json',
            url: webUrl +  'api/standings'
        });
    };

    /********************************* Roles *******************************/
    
    this.getRoles = function (webUrl) {
        return $http({
            method: 'GET',
            //withCredentials: true,
            data: 'json',
            url: webUrl +  'api/roles'
        });
    };

    /********************************* TopNavigation *******************************/
    
    this.getTopNavigation = function (webUrl) {
        return $http({
            method: 'GET',
            //withCredentials: true,
            data: 'json',
            url: webUrl +  'api/topNavigation'
        });
    };

    this.addTopNavigation = function (webUrl, objTopNavigation) {
        return $http({
            method: 'POST',
            url: webUrl +  'api/topNavigation',
            data: objTopNavigation,
            //withCredentials: true,
        }).then(function successCallback(response){
            console.log(response);
        },function errorCallback(response){
            console.log(response);
        });
    };

    this.editTopNavigation = function (webUrl,objTopNavigation) {
        return $http({
            method: 'PUT',
            url: webUrl +  'api/topNavigation/' + objTopNavigation.Id,
            //withCredentials: true,
           data: objTopNavigation
        });

    };

  });

