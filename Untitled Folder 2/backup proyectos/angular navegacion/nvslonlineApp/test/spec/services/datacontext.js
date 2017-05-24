'use strict';

describe('Service: datacontext', function () {

  // load the service's module
  beforeEach(module('nvslonlineAppApp'));

  // instantiate service
  var datacontext;
  beforeEach(inject(function (_datacontext_) {
    datacontext = _datacontext_;
  }));

  it('should do something', function () {
    expect(!!datacontext).toBe(true);
  });

});
