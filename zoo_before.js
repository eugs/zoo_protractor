
describe ("Adopt an animal on the zoo test site", function () {

  var resource = "http://www.thetestroom.com/jswebapp/";
  beforeEach(function () {
    browser.get(resource);
  });

  afterEach(function () {
    //some code
    console.log("after method executed");
  })

  it ("should be on correct page", function () {
    // expect(browser.getCurrentUrl()).toContain("jswebapp");
    expect(browser.getCurrentUrl()).toEqual(resource);
  });

  describe ("should generate correct text", function () {
      var txtMsg;
    beforeEach(function () {
      txtMsg = "sended keys";
    });

      it ("should check correct text", function () {
        element(by.model("person.name")).sendKeys(txtMsg);
        element(by.binding("person.name")).getText().then(function (text) {
          console.log(text);
          expect(text).toEqual(txtMsg);
        });

        element(by.buttonText("CONTINUE")).click();

      });
  });

describe ("should check correct number of options", function () {
    var lengthOfItems;

    beforeEach(function () {
      lengthOfItems = 4;
    })

  it("should check correct number of options", function () {
      element(by.buttonText("CONTINUE")).click();
      element(by.model("animal")).$("[value='3']").click();
      element.all(by.css(".ng-pristine option")).then(function (items) {
        expect(items.length).toBe(lengthOfItems);
        expect(items[1].getText()).toBe("George the Turtle");
      });
      element(by.partialButtonText("CONT")).click();
  });

  it("should check user is on the thank you page", function () {
    element(by.buttonText("CONTINUE")).click();
    element(by.buttonText("CONTINUE")).click();
    expect(browser.getCurrentUrl()).toContain("confirm");
  });

});


})
