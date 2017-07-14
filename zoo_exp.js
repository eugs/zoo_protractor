
describe ("Adopt an animal on the zoo test site", function () {

  var resource = "http://www.thetestroom.com/jswebapp/";

  it ("should be on correct page", function () {
    browser.get(resource);

    // expect(browser.getCurrentUrl()).toContain("jswebapp");
    expect(browser.getCurrentUrl()).toEqual(resource);
  });

  it ("should able to adopt the animal", function () {
    browser.get(resource);
    var txtMsg = "sended keys";

    element(by.model("person.name")).sendKeys(txtMsg);
    element(by.binding("person.name")).getText().then(function (text) {
      console.log(text);
      expect(text).toEqual(txtMsg);
    });

    element(by.buttonText("CONTINUE")).click();

  });

  it("should check correct number of options", function () {
      browser.get(resource);
      element(by.buttonText("CONTINUE")).click();
      element(by.model("animal")).$("[value='3']").click();
      element.all(by.css(".ng-pristine option")).then(function (items) {
        expect(items.length).toBe(4);
        expect(items[1].getText()).toBe("George the Turtle");
      });
      element(by.partialButtonText("CONT")).click();
  });

  it("should check user is on the thank you page", function () {
    browser.get(resource);
    element(by.buttonText("CONTINUE")).click();
    element(by.buttonText("CONTINUE")).click();
    expect(browser.getCurrentUrl()).toContain("confirm");
  }

})
