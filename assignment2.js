const questions = [
    "What is the capital of France?\n1. Paris\n2. London\n3. Berlin\n4. Madrid",
    "Which language is used for web development?\n1. Python\n2. JavaScript\n3. C++\n4. Java",
    "What is 2 + 2?\n1. 3\n2. 4\n3. 5\n4. 6"
];

const correctAnswers = [1, 2, 2]; 
let score = 0;

// Loop through each question
for (let i = 0; i < questions.length; i++) {
    let userAnswer = parseInt(prompt(questions[i]));
    
    if (userAnswer === correctAnswers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong!");
    }
}

// Display the final score
alert("Your final score is: " + score + " out of " + questions.length);