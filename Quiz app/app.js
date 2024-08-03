const question = [
    {
        questions: "What is the capital of India?",
        answer: [
            {text: "Delhi", correct: true},
            {text: "Mumbai", correct: false},
            {text: "Chennai", correct: false},
            {text: "Kolkata", correct: false}
        ]
    },
    {
        questions: "Which is the smallest country in the world?",
        answer: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Sri lanka", correct: false}
        ]
    },
    {
        questions: "Which is the largesst desert in the world?",
        answer: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true}
        ]
    },
    {
        questions: "Which is the smallest continent in the world?",
        answer: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false}
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    // resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        // if(answer.correct) {
        //     button.dataset.correct = answer.correct;
        // }
        // button.addEventListener("click", selectAnswer);
    });
}
startQuiz();