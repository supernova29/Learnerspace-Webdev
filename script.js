document.getElementById('start-quiz').addEventListener('click', startQuiz);

function startQuiz() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = "What is the name of the main character in the game?";
    document.getElementById('start-quiz').style.display = 'none';

    const answers = ["Character A", "Character B", "Character C", "Character D"];
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => {
            questionElement.textContent = "Correct answer: Character A";
            button.style.backgroundColor = answer === "Character A" ? 'Red' : 'Yellow';
        });
        document.getElementById('quiz-container').appendChild(button);
    });
}
