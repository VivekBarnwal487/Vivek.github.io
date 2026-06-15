const questions = [
    // --- India Questions ---
    {
        question: "In which year did India gain Independence from British rule?",
        answers: [
            { text: "1945", correct: false },
            { text: "1947", correct: true },
            { text: "1950", correct: false },
            { text: "1952", correct: false }
        ]
    },
    {
        question: "Which river is officially recognized as the National River of India?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Narmada", correct: false },
            { text: "Ganga", correct: true },
            { text: "Brahmaputra", correct: false }
        ]
    },
    {
        question: "Who is fondly remembered as the 'Father of the Indian Constitution'?",
        mcq: true,
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "Dr. B.R. Ambedkar", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Subhas Chandra Bose", correct: false }
        ]
    },

    // --- BIT Sindri Questions ---
    {
        question: "In what year was BIT Sindri originally established?",
        answers: [
            { text: "1947", correct: false },
            { text: "1949", correct: true },
            { text: "1955", correct: false },
            { text: "1960", correct: false }
        ]
    },
    {
        question: "Before the year 2000, what did the 'B' in BIT Sindri stand for?",
        answers: [
            { text: "Birsa", correct: false },
            { text: "Bharat", correct: false },
            { text: "Bengal", correct: false },
            { text: "Bihar", correct: true }
        ]
    },
    {
        question: "BIT Sindri's beautiful campus is situated near the banks of which river?",
        answers: [
            { text: "Damodar River", correct: true },
            { text: "Subarnarekha River", correct: false },
            { text: "Barakar River", correct: false },
            { text: "Koel River", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question-text");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizScreen = document.getElementById("quiz-screen");
const scoreScreen = document.getElementById("score-screen");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizScreen.classList.remove("hidden");
    scoreScreen.classList.add("hidden");
    nextButton.classList.add("hidden");
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hidden");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    quizScreen.classList.add("hidden");
    scoreScreen.classList.remove("hidden");
    scoreElement.innerText = score;
    totalElement.innerText = questions.length;
}

restartButton.addEventListener("click", startQuiz);

startQuiz();