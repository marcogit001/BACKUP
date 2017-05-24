'use strict';

describe('Controller: CStandingCtrl', function () {

  // load the controller's module
  beforeEach(module('nvslonlineAppApp'));

  var CStandingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CStandingCtrl = $controller('CStandingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CStandingCtrl.awesomeThings.length).toBe(3);
  });
});
