describe('Home', function () {
  // valid login credentials
  var luser = 'user';
  var lpass = 'pass';

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-home> with "Home Works!" text after login', function () {
    // guard redirects to login component
    // login
    var username = element(by.css("input[name='username']"));
    username.sendKeys(luser);
    var password = element(by.css("input[name='password']"));
    password.sendKeys(lpass);
    var login = element(by.css("input[type='submit']"));
    login.click();
    // login.click(); //should not need to click login twice
    // redirected to home page after login
    var home = element(by.css('my-app my-home'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Home Works!");
  });

});
