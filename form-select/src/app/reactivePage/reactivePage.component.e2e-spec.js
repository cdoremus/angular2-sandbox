describe('ReactivePageComponent', function () {

  beforeEach(function () {
    browser.get('/reactivePage');
  });

  it('should have <my-reactive-page>', function () {
    var home = element(by.css('my-app my-reactive-page'));
    expect(home.isPresent()).toEqual(true);
  });

  it('should have text "Currently Selected User Emitted from Dropdown Component:"', function () {
    var h5 = element(by.css('h5'));
    expect(h5.getText()).toBe('Currently Selected User Emitted from Dropdown Component:');
  });

});
