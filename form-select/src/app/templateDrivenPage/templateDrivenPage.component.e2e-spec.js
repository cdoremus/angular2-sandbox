describe('TemplateDrivenPage', function () {

  beforeEach(function () {
    browser.get('/templateDrivenPage');
  });

  it('should have <my-template-form>', function () {
    var page = element(by.css('my-app my-template-form'));
    expect(page.isPresent()).toEqual(true);
  });

  it('should have text "Currently Selected User Emitted from Dropdown Component:"', function () {
    var h5 = element(by.css('h5'));
    expect(h5.getText()).toBe('Currently Selected User Emitted from Dropdown Component:');
  });

});
