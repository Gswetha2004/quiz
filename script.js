const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris",
            d: "Lisbon"
        },
        correctAnswer: "c"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: {
            a: "Harper Lee",
            b: "Mark Twain",
            c: "Ernest Hemingway",
            d: "F. Scott Fitzgerald"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Jupiter",
            c: "Mars",
            d: "Saturn"
        },
        correctAnswer: "b"
    }
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const scoreDisplay = document.getElementById("score");

function buildQuiz() {
    const output = [];
    questions.forEach((currentQuestion, questionIndex) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionIndex}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;
    questions.forEach((currentQuestion, questionIndex) => {
        const answerContainer = answerContainers[questionIndex];
        const selector = `input[name=question${questionIndex}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
    });
    scoreDisplay.innerHTML = `You scored ${score} out of ${questions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
