describe ("testing the JS zoo site", function () {

  beforeEach(function () {
    var resource = "http://www.thetestroom.com/jswebapp/";
    browser.get(resource);
  });

  it("should test by using CSS expressions", function () {
      // css tag
      element(by.css('input')).sendKeys("text test");

      // css class
      element(by.css('.ng-binding')).getText()
        .then (function (text) {
        console.log(text);
      });

      // css id
      element(by.css('#continue_button')).click();

      // css chaining
      element(by.css('button#continue_button')).click();

      // css child nodes
      element(by.css('table td a')).getText().then (function (text) {
          console.log((text));
      });

      // css attributes (can be without h1)
      element(by.css('h1[id="title"]')).getText().then (function (text) {
          console.log((text));
      });

    });

});
