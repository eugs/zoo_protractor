describe ("Adopt an animal on the zoo test site", function () {

  it ("should able to adopt the animal", function () {
    browser.get("http://www.thetestroom.com/jswebapp");
    element(by.model("person.name")).sendKeys("sended keys");
    element(by.binding("person.name")).getText().then(function (text) {
      console.log(text);
    });
    element(by.buttonText("CONTINUE")).click();

    element(by.model("animal")).$('[value="1"]').click();
    console.log(element(by.model("animal")).getText());
    element(by.partialButtonText("CONT")).click();
  })
})
