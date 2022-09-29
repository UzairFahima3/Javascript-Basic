let name = "Javascript"
console.log("Hello " + name + " World");

let person = {
  first_name: "Uzair",
  last_name: "Faheem"
}
middle_name = 'middle_name'
person[middle_name] = 'TEST'

// console.log("Hello " + person.first_name + " " + person.middle_name);

let array = ['red', 'blue'];
// console.log(array);

function greet(name, fans) {
  console.log("Greeting EL Senor " + name);
  console.log("El Mi Senor your fans following is not less than " + fansfollowing(fans).toString())
}

function fansfollowing(number) {
  return number * number
}

greet('Philip II', 120);
greet("Charles", 88);