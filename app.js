function showQuiz() {
  const userName = prompt("Please enter your name:");

  let correctAnswersCount = 0; // Initialize a counter for correct answers
  // Hide the start button
  document.getElementById("start-quiz-button").style.display = "none";

  // Show the quiz questions container
  document.getElementById("quiz-container").style.display = "block";

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
  if (coffee.toLowerCase() === "yes" || coffee.toLowerCase() === "y") {
    correctAnswersCount++;
  }

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
  if (sky.toLowerCase() === "yes" || sky.toLowerCase() === "y") {
    correctAnswersCount++;
  }

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
  if (ageOfUser.toLowerCase() === "no" || ageOfUser.toLowerCase() === "n") {
    correctAnswersCount++;
  }

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
  if (javaScript.toLowerCase() === "yes" || javaScript.toLowerCase() === "y") {
    correctAnswersCount++;
  }

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
  if (fries.toLowerCase() === "no" || fries.toLowerCase() === "n") {
    correctAnswersCount++;
  }

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

  let numberGuess = 8;
  let maxAttempts = 4;
  // initialisation; condition; increment
  for (let i = 1; i <= maxAttempts; i++) {
    let userGuess = prompt(
      "I'm thinking of a number between 1 and 10, take a guess"
    );
    console.log(userGuess);
    if (parseInt(userGuess) === numberGuess) {
      // parseInt(userGuess) converts a string to an integer
      alert(`Congratulations! you guessed the correct number: ${numberGuess}.`);
      break; // break will stop the loop if correct answer is guessed
    } else if (userGuess < numberGuess) {
      alert("Too low. Try again.");
    } else {
      alert("Too high. Try again.");
    }

    // check if the user has used their maximum attempts
    if (i === maxAttempts) {
      alert(
        `Sorry, you've used all your attempts. The correct number was ${numberGuess}.`
      );
    }
  }

  // i = 1 sets a variable before the loop starts. i effectively represents an 'attempt' from the user?
  // i <= maxAttempts defines the condition for the loop to run (i is less than or equal to 4).
  // i++ increases a value (i++) each time the code block in the loop has been executed.

  function arrayQuestion() {
    // Array of possible correct answers
    const correctAnswers = ["apple", "banana", "cherry", "grape", "orange"];

    // Maximum number of attempts allowed
    const maxGuess = 6;

    // Flag to track if the user guessed correctly
    let guessedCorrectly = false;

    for (let attempt = 1; attempt <= maxGuess; attempt++) {
      // Prompt the user for their guess
      const userInput = prompt(
        `Attempt ${attempt}/${maxGuess}: Guess a fruit:`
      );

      // Check if the user's guess is one of the correct answers
      if (correctAnswers.includes(userInput.toLowerCase())) {
        guessedCorrectly = true;
        alert("Congratulations! You guessed correctly.");
        break; // Exit the loop if the guess is correct
      } else {
        alert("Incorrect guess. Try again.");
      }

      // Check if the user has exhausted all attempts
      if (attempt === maxGuess) {
        alert(
          `Sorry, you've used all your attempts. The correct answers were: ${correctAnswers.join(
            ", "
          )}.`
        );
      }
    }
  }

  arrayQuestion();

  alert(
    `Thank you, ${userName}! You got ${correctAnswersCount} out of 7 questions correct.`
  );
}

document
  .getElementById("start-quiz-button")
  .addEventListener("click", showQuiz);
