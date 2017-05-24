'use strict';

describe('Controller: APlayerCtrl', function () {

  // load the controller's module
  beforeEach(module('nvslonlineAppApp'));

  var APlayerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    APlayerCtrl = $controller('APlayerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(APlayerCtrl.awesomeThings.length).toBe(3);
  });
});
