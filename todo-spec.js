describe('ang todo', function () {
  it('should add', function () {
    browser.get('http://www.angularjs.org');

    element(by.model('todoText')).sendKeys('write a pro todo');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write a pro todo');
  });
});
