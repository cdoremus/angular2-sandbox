describe('About', function () {

  beforeEach(function () {
    browser.get('/about');
  });

  it('guard on about component should redirect user to login page', function() {
    var login = element(by.css('login legend'));
    expect(login.isPresent()).toEqual(true);
    expect(login.getText()).toEqual("Please login");
  });


});
