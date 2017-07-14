describe ("test zoo site for input", function () {
    it ("to test input field and check text output", function () {
      browser.get("http://www.thetestroom.com/jswebapp");
      element(by.model("person.name")).sendKeys("I will sub to this ");
      element(by.binding("person.name")).getText().then(function (text) {
        console.log(text);
      })
    });
})
