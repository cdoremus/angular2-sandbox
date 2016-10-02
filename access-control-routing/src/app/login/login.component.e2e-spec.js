describe('Login', function () {

  beforeEach(function () {
    browser.get('/login');
  });

  it('Should display "Please login"', function() {
    var login = element(by.css('login legend'));
    expect(login.isPresent()).toEqual(true);
    expect(login.getText()).toEqual("Please login");
  });


});
