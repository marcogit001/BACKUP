'use strict';

describe('Service: authUser', function () {

  // load the service's module
  beforeEach(module('testAngularApp'));

  // instantiate service
  var authUser;
  beforeEach(inject(function (_authUser_) {
    authUser = _authUser_;
  }));

  it('should do something', function () {
    expect(!!authUser).toBe(true);
  });

});
