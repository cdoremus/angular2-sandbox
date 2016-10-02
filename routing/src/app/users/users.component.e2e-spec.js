describe('Users', function () {

  beforeEach(function () {
    browser.get('/users');
  });

  it('should have <my-users> element', function () {
    var users = element(by.css('my-app my-users'));
    expect(users.isPresent()).toEqual(true);
  });

  it('should have 10 records', function () {
    element.all(by.css('.user-record')).then(function(items) {
      expect(items.length).toBe(10);
    });
  });

  it('should navigate to user details page and present first user', function () {
    browser.get('/users/1');
    var user1 = element(by.css('h3'));
    expect(user1.isPresent()).toEqual(true);
    expect(user1.getText()).toEqual("Leanne Graham");
  });

});
