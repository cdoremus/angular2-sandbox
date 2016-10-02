describe('Dialog', function () {

  beforeEach(function () {
    browser.get('/'); // go home first
    browser.get('/home(dialog:dialog-path)');
  });

  it('should have <my-dialog> element', function () {
    var dialog = element(by.css('my-app my-dialog'));
    expect(dialog.isPresent()).toEqual(true);
  });

  it('should have display dialog with "Angular 2 Dialog" title', function () {
    var dialog = element(by.css('my-app my-dialog h2'));
    expect(dialog.isPresent()).toEqual(true);
    expect(dialog.getText()).toEqual("Angular 2 Dialog");
  });

});
