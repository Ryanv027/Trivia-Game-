const quizContainer = document.getElementById('quiz');



function buildQuiz() {
    const output = []

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = []
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">
            ${currentQuestion.question} </div> 
            <div class="answers">
            ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('')
}

const myQuestions = [{
        question: "1. Who won the 2010 World Series?",
        answers: {
            a: 'Giants',
            b: 'Dodgers',
            c: 'Cardinals',
            d: 'Yankees',
        },
        correctAnswer: 'a'
    },
    {
        question: "2. Who is 2nd all-time in receiving yards behind Jerry Rice?",
        answers: {
            a: "Larry Fitzgerald",
            b: "Terrell Owens",
            c: "Calvin Johnson",
            d: "Randy Moss",
        },
        correctAnswer: "b"
    },
    {
        question: "3. How many olympic gold medals does Michael Phelps have?",
        answers: {
            a: "17",
            b: "23",
            c: "27",
            d: "19",
        },
        correctAnswer: "b"
    },
    {
        question: "4. How many titles did Kobe win without Shaq?",
        answers: {
            a: "1",
            b: "3",
            c: "2",
            d: "4",
        },
        correctAnswer: "c"
    },
    {
        question: "5. How many homeruns did Barry Bonds hit in his record-breaking 2001 season?",
        answers: {
            a: "69",
            b: "65",
            c: "73",
            d: "75",
        },
        correctAnswer: "c"
    },
    {
        question: "6. Which team was NOT part of the original six in hockey?",
        answers: {
            a: "Penguins",
            b: "Red Wings",
            c: "Bruins",
            d: "Maple Leafs",
        },
        correctAnswer: "a"
    },
    {
        question: "7. Which is the only team to play in every World Cup?",
        answers: {
            a: "France",
            b: "Spain",
            c: "Brazil",
            d: "Argentina",
        },
        correctAnswer: "c"
    },
    {
        question: "8. What year was the first Super Bowl played?",
        answers: {
            a: "1967",
            b: "1971",
            c: "1962",
            d: "1959",
        },
        correctAnswer: "a"
    },
];

buildQuiz()

function showResults() {
    console.log('hello')
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let output = []

    let numbCorrect = 0;
    console.log(numbCorrect)

    let incorrect = 0;

    console.log(incorrect)
    myQuestions.forEach((currentQuestion, questionNumber) => {



        const answerContainer = answerContainers[questionNumber];

        const selector = `input[name=question${questionNumber}]:checked`;

        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        console.log(userAnswer)

        if (userAnswer === currentQuestion.correctAnswer) {
            numbCorrect++

        } else {
            incorrect++
        }
    })

    output.push(
        `<p class="results">You got ${numbCorrect} answers correct!</p>
        <p class="results">You got ${incorrect} answers incorrect... `)

    quizContainer.innerHTML = output.join('')
}

$("#submit").on('click', function() {
    showResults()
});