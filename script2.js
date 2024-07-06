const quizData = [
    {
        question: "What year was the first Road Rash game released?",
        choices: ["1989", "1991", "1993", "1995"],
        correct: 1
    },
    {
        question: "Which platform was the original Road Rash released on?",
        choices: ["PlayStation", "Sega Genesis", "Nintendo 64", "PC"],
        correct: 1
    },
    {
        question: "What is the main objective in Road Rash?",
        choices: ["Collect coins", "Defeat the boss", "Win the race", "Complete missions"],
        correct: 2
    },
    {
        question: "Which of these weapons can you use in Road Rash?",
        choices: ["Sword", "Chain", "Gun", "Shield"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('next-question').addEventListener('click', nextQuestion);

function startQuiz() {
    document.getElementById('start-quiz').style.display = 'none';
    document.getElementById('next-question').style.display = 'inline-block';
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const currentQuestion = quizData[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice');
        button.addEventListener('click', () => checkAnswer(index));
        choicesElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong! The correct answer was ' + currentQuestion.choices[currentQuestion.correct] + '.');
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function nextQuestion() {
    showQuestion();
}

function showResults() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const nextButton = document.getElementById('next-question');

    questionElement.textContent = `Quiz finished! Your score is ${score} out of ${quizData.length}.`;
    choicesElement.innerHTML = '';
    nextButton.style.display = 'none';
}
