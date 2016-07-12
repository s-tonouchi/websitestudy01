class HelloWorld {
  constructor(public message: String) {}
  hello(){
    return "<h2>" + this.message + "</h2>";
  }
};

var helloWorld = new HelloWorld("Hello world!!");

document.getElementById('message').innerHTML = helloWorld.hello();
