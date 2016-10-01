describe('Home', function () {
  // valid login credentials
  var luser = 'user';
  var lpass = 'pass';

  beforeEach(function () {
    browser.get('/');
  });

  it('should be able to login, redirected to home page and then to about page after About link is clicked and have Login link text in menu change to Logout', function () {
    //check login link text in menu
    var loginLink = element(by.css('.login-link'));
    expect(loginLink.getText()).toEqual("Login");

    // guard redirects to login component
    // login
    var username = element(by.css("input[name='username']"));
    username.sendKeys(luser);
    var password = element(by.css("input[name='password']"));
    password.sendKeys(lpass);
    var login = element(by.css("input[type='submit']"));
    // click Login button
    login.click();

    // redirected to home page after login
    var home = element(by.css('my-app my-home'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Home Works!");

    //goto the about page
    var aboutLink = element(by.css("a[href='/about']"));
    aboutLink.click();
    var about = element(by.css('my-app my-about'));
    expect(about.isPresent()).toEqual(true);
    expect(about.getText()).toEqual("About Works!");

    // make sure that login link text === Logout
    expect(loginLink.getText()).toEqual("Logout");

  });

});
