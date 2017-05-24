'use strict';

/**
 * @ngdoc service
 * @name nvslonlineAppApp.common
 * @description
 * # common
 * Service in the nvslonlineAppApp.
 */
angular.module('nvslonlineAppApp')
  .service('common', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

/*function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}*/

    this.randomDate = function(start, end){
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };

    this.convertToTime = function(stringDate) {
      var d = new Date(stringDate),
          h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
          m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
      return  h + ':' + m;
    };

   this.convertToDate = function(stringDate) {
      var dateOut = new Date(stringDate);
      dateOut.setDate(dateOut.getDate()+1);
      return dateOut;
    };

    this.shuffle = function(array){
      var currentIndex = array.length,temporaryValue,randomIndex;
      //While there remain elements to shuffle..
      while(0!==currentIndex){
        //Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //and swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    };

  });
