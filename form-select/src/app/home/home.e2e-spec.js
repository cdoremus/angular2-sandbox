describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <home>', function () {
    var home = element(by.css('my-app home h2'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Fun with Select!");
  });

});
