'use strict';

describe('Controller: AScheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('nvslonlineAppApp'));

  var AScheduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AScheduleCtrl = $controller('AScheduleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AScheduleCtrl.awesomeThings.length).toBe(3);
  });
});
