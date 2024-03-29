'use strict';

describe('Controller: CScheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('nvslonlineAppApp'));

  var CScheduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CScheduleCtrl = $controller('CScheduleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CScheduleCtrl.awesomeThings.length).toBe(3);
  });
});
