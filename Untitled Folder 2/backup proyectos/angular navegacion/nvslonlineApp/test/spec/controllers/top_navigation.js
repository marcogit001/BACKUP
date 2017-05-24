'use strict';

describe('Controller: TopNavigationCtrl', function () {

  // load the controller's module
  beforeEach(module('nvslonlineAppApp'));

  var TopNavigationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopNavigationCtrl = $controller('TopNavigationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TopNavigationCtrl.awesomeThings.length).toBe(3);
  });
});
