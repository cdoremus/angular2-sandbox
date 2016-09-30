describe('Home', function () {
  // valid login credentials
  var luser = 'user';
  var lpass = 'pass';

  beforeEach(function () {
    browser.get('/');
  });

  it('should be able to login, redirected to home page and then to about page after About link is clicked', function () {
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

    //goto the about page
    var aboutLink = element(by.css("a[href='/about']"));
    aboutLink.click();
    var about = element(by.css('my-app my-about'));
    expect(about.isPresent()).toEqual(true);
    expect(about.getText()).toEqual("About Works!");
  });

});
