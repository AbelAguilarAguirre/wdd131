let score = 0;
let currentQuestion = 0;

const quizData = [
    {
        question: "Where do pineapples originate from?",
        answers: [
            { text: "Hawaii", correct: false },
            { text: "South America", correct: true },
            { text: "Africa", correct: false }
        ],
        feedback: "Pineapples come from South America."
    },
    {
        question: "How long does it take for a pineapple to grow?",
        answers: [
            { text: "6 months", correct: false },
            { text: "1 year", correct: false },
            { text: "2 years", correct: true }
        ],
        feedback: "It takes about 2 years for a pineapple to grow."
    },
    {
        question: "What is the main enzyme in pineapples that breaks down proteins?",
        answers: [
            { text: "Amylase", correct: false },
            { text: "Bromelain", correct: true },
            { text: "Pepsin", correct: false }
        ],
        feedback: "The main enzyme in pineapples is bromelain."
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer');
const feedbackElement = document.getElementById('feedback');
const result = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const finalMessage = document.getElementById('final-message');

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    feedbackElement.classList.add('hidden');
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuizData.answers[index].text;
        button.onclick = () => checkAnswer(currentQuizData.answers[index].correct);
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score += 1;
        feedbackElement.textContent = "Correct! " + quizData[currentQuestion].feedback;
    } else {
        feedbackElement.textContent = "Wrong! " + quizData[currentQuestion].feedback;
    }
    feedbackElement.classList.remove('hidden');

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 2000);
}

function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    result.classList.remove('hidden');
    scoreDisplay.textContent = score;

    if (score === 3) {
        finalMessage.textContent = "Amazing! You’re a pineapple expert! Enjoy a 10% discount!";
        localStorage.setItem("discount", "true");
    } else if (score === 2) {
        finalMessage.textContent = "Good job! You know quite a bit about pineapples.";
    } else {
        finalMessage.textContent = "Better luck next time! Keep learning about pineapples!";
    }
}

startQuiz();