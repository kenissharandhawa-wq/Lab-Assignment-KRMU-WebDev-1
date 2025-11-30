var quizQuestions = [
  { question: "What is the capital of Italy?", answer: "b", hint: "All roads lead to Rome." },
  { question: "2 + 2 equals?", answer: "c", hint: "Basic math!" },
  { question: "What language makes web pages interactive?", answer: "c", hint: "It starts with 'J'." },
  { question: "What does CSS stand for?", answer: "d", hint: "It styles your HTML." },
  { question: "In URLs, what does 'www' mean?", answer: "b", hint: "Three words, starts with 'world'." },
  { question: "What is the boiling point of water in Celsius?", answer: "a", hint: "Triple digits." },
  { question: "Which planet is known as the Red Planet?", answer: "b", hint: "Named after a Roman god." }
];

var multipleChoice = {
  "What is the capital of Italy?": ["a) Paris", "b) Rome", "c) Berlin", "d) Madrid"],
  "2 + 2 equals?": ["a) 3", "b) 5", "c) 4", "d) 6"],
  "What language makes web pages interactive?": ["a) HTML", "b) CSS", "c) JavaScript", "d) Python"],
  "What does CSS stand for?": ["a) Creative Style System", "b) Code Style Sheets", "c) Color Style Syntax", "d) Cascading Style Sheets"],
  "In URLs, what does 'www' mean?": ["a) Web Wide World", "b) World Wide Web", "c) Wide Web World", "d) World Web Wide"],
  "What is the boiling point of water in Celsius?": ["a) 100", "b) 200", "c) 110", "d) 120"],
  "Which planet is known as the Red Planet?": ["a) Venus", "b) Mars", "c) Jupiter", "d) Saturn"]
};

var score = 0;
var highScore = localStorage.getItem("highScore") || 0;

console.log("🧠 Welcome to the Multiple-Choice Console Quiz!");
console.log("Answer by typing the letter (a, b, c, or d).\n");

for (var i = 0; i < quizQuestions.length; i++) {
  var q = quizQuestions[i];
  var options = multipleChoice[q.question].join("\n");

  var userAnswer = prompt("Q" + (i + 1) + ": " + q.question + "\n" + options + "\nYour answer (a/b/c/d):");

  if (userAnswer !== null) {
    userAnswer = userAnswer.toLowerCase().trim();
  } else {
    userAnswer = "";
  }

  if (userAnswer === q.answer) {
    score++;
    console.log("✅ Q" + (i + 1) + ": Correct!");
  } else {
    console.log("❌ Q" + (i + 1) + ": Wrong. Hint: " + q.hint);
    console.log("Correct answer: " + q.answer);
  }
}

console.log("\n🏁 Quiz complete!");
console.log("You scored " + score + " out of " + quizQuestions.length);

if (score > highScore) {
  localStorage.setItem("highScore", score);
  console.log("🎉 New high score! Well done!");
} else {
  console.log("Your high score is still: " + highScore);
}

var playAgain = confirm("Do you want to play again?");
if (playAgain) {
  location.reload();
}