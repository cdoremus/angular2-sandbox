describe('About', function () {

  beforeEach(function () {
    browser.get('/about');
  });

  it('should have <my-about> with "About Works!" text', function () {
    var home = element(by.css('my-app my-about p'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("About Works!");
  });

});
