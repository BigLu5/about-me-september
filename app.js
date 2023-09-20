const userName = prompt("Please enter your name:");

// Check if the user entered a name
if (userName !== null && userName !== "") {
  // Create a custom greeting message
  const greetingMessage = `Hello, ${userName}, that is a great name.`;

  // Display the custom greeting message
  alert(greetingMessage);

  // Create a welcome message
  const welcomeMessage = `Welcome to my website, ${userName}.`;
  document.write(welcomeMessage);

  // Display the welcome message
  alert(welcomeMessage);
} else {
  // Handle the case where the user didn't enter a name
  alert("You didn't enter your name! Welcome to my website!");
}

let coffee = prompt("Do you drink coffee? please answer yes or no");

console.log(coffee);
console.log(coffee.toLowerCase());

switch (coffee.toLowerCase()) {
  case "yes":
  case "y":
    alert("Me too, it gets me through the day");
    // console.log("Me too, it gets me through the day");
    break;
  case "no":
  case "n":
    alert("You should try it");
    // console.log("You should try it");
    break;
  default:
    alert("It's a simple question");
  // console.log(`It's a simple question...`);
}

let sky = prompt("Is the sky blue? please answer yes or no");

console.log(sky);
console.log(sky.toLowerCase());

switch (sky.toLowerCase()) {
  case "yes":
  case "y":
    alert("I agree");
    // console.log("I agree");
    break;
  case "no":
  case "n":
    alert("I'm sure there is a reason you're saying this");
    // console.log("I'm sure there is a reason you're saying this");
    break;
  default:
    alert("It's a simple question");
  // console.log(`It's a simple question...`);
}

let ageOfUser = prompt("Are you over 18? please answer yes or no");

console.log(ageOfUser);
console.log(ageOfUser.toLowerCase());

switch (ageOfUser.toLowerCase()) {
  case "yes":
  case "y":
    alert("depressing isn't it");
    // console.log("depressing isn't it");
    break;
  case "no":
  case "n":
    alert("Good for you");
    // console.log("Good for you");
    break;
  default:
    alert("It's a simple question");
  // console.log(`It's a simple question...`);
}

let javaScript = prompt(
  "Is JavaScript a programming language? please answer yes or no"
);

console.log(javaScript);
console.log(javaScript.toLowerCase());

switch (javaScript.toLowerCase()) {
  case "yes":
  case "y":
    alert("Indeed it is");
    // console.log("Indeed it is");
    break;
  case "no":
  case "n":
    alert("Take another guess");
    // console.log("Take another guess");
    break;
  default:
    alert("It's a simple question");
  // console.log(`It's a simple question...`);
}

let fries = prompt("Would you like fries with that? please answer yes or no");

console.log(fries);
console.log(fries.toLowerCase());

switch (fries.toLowerCase()) {
  case "yes":
  case "y":
    alert("Fries is fine but the milkshake machine is broken");
    // console.log("Fries is fine but the milkshake machine is broken");
    break;
  case "no":
  case "n":
    alert("Good, too many carbs anyway");
    // console.log("Good, too many carbs anyway");
    break;
  default:
    alert("It's a simple question");
  // console.log(`It's a simple question...`);
}
