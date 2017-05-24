'use strict';

describe('Controller: ADivisionCtrl', function () {

  // load the controller's module
  beforeEach(module('nvslonlineAppApp'));

  var ADivisionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ADivisionCtrl = $controller('ADivisionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ADivisionCtrl.awesomeThings.length).toBe(3);
  });
});
