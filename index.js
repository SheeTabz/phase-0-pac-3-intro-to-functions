// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
  sayHello();
  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything");
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Hi", "Shee")
const num1 =  12
const num2 = 10
  function add(x,y){
    return x + y
  }
  function calculator(){
    const result = add(num1,num2);
    return `Answer : ${result}`
  }
  console.log(calculator())

  function say(greeting, firstName) {
    console.log("I was called!");

    return `${greeting}, ${firstName}!`;
    
  }
  console.log(say("Howdy", "partner"));