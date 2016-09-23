describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <home> with h2 containing text', function () {
    var home = element(by.css('my-app home h2'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Fun with Select!");
  });

  it('should NOT display messages when page is first displayed', function () {
    var msgTitle = element(by.id('messages-title'));
    expect(msgTitle.isPresent()).toEqual(false);
  });


  it('should display message title when button clicked', function () {
    var button = element(by.css('button'));
    expect(button.isPresent()).toEqual(true);
    button.click();
    var msgTitle = element(by.id('messages-title'));
    expect(msgTitle.isPresent()).toEqual(true);
    expect(msgTitle.getText()).toEqual('Click Button Messages');
  });

  it('should display messages when button clicked', function () {
    var button = element(by.css('button'));
    expect(button.isPresent()).toEqual(true);
    button.click();
    var list = element.all(by.css('.list-option'));
    expect(list.get(0).getText()).toEqual('good');
    expect(list.get(1).getText()).toEqual('first');
  });

  it('should display correct messages when both drop downs are selected', function () {
    var option1text = 'best';
    var option2text = 'second';
    var dd1option3 = element(by.cssContainingText('option', option1text));
    dd1option3.click();
    var dd2option2 = element(by.cssContainingText('option', option2text));
    dd2option2.click();
    var button = element(by.css('button'));
    expect(button.isPresent()).toEqual(true);
    button.click();
    var list = element.all(by.css('.list-option'));
    expect(list.get(0).getText()).toEqual(option1text);
    expect(list.get(1).getText()).toEqual(option2text);
  });
});
