'use strict';

describe('Controller: StandingCtrl', function () {

  // load the controller's module
  beforeEach(module('nvslonlineAppApp'));

  var StandingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StandingCtrl = $controller('StandingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StandingCtrl.awesomeThings.length).toBe(3);
  });
});
