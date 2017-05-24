'use strict';

describe('Controller: ATeamCtrl', function () {

  // load the controller's module
  beforeEach(module('nvslonlineAppApp'));

  var ATeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ATeamCtrl = $controller('ATeamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ATeamCtrl.awesomeThings.length).toBe(3);
  });
});
