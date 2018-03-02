function startUp() {
    //Calling our function that forms our questions
    buildQuiz()
        //creating the done button at the bottom of the quiz
    $('.button-col').html('<button class="btn-primary button" id="submit">Done!</button>')
        //setting up a timer at the beginning of the quiz
    var counter = 120;
    var intervalId = setInterval(timeIt, 1000)
    var display = '2:00'
    setInterval(convertTime, 1000)


    function convertTime() {
        var minutes = Math.floor(counter / 60)
        var seconds = counter - (minutes * 60)

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        display = minutes + ":" + seconds;
    }


    function timeIt() {
        console.log('hello')
        counter--
        $('#timer').html('Time left: ' + (display))
        if (counter === 0) {
            showResults()
            clearInterval(intervalId)
            $('#timer').html('Your Results!')
            $("#restart").html(`<button class="btn-primary button" id="button restarting">Restart</button>`)
            $('#restarting').on('click', function() {
                console.log('wtf')
                startUp()
            })
        }
    }
    //Creating an on click event that displays the results of the quiz when finished
    $("#submit").on('click', function() {
        showResults()
        $("#restart").html(`<button class="btn-primary button" id="restarting">Restart</button>`)
        $('#restarting').on('click', function() {
            startUp()
        })
        clearInterval(intervalId)
        $('#timer').html('Your Results!')
    });
}
//Creating a function that will create our answers from our object array
//creating a function that presents the results from the quiz
function showResults() {

    const answerContainers = $('#quiz').find('.answers')
    let output = []
    let numbCorrect = 0;
    let incorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numbCorrect++
        } else {
            incorrect++
        }
    })

    output.push(
        `<p class="results">You got ${numbCorrect} answers correct!</p>
        <p class="results">You got ${incorrect} answers incorrect...</p>`)

    $('#quiz').html(output)
}

$('#start').on('click', function() {
    startUp()
})

function buildQuiz() {
    const output = []

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = []
        for (let letter in currentQuestion.answers) {
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
    $('#quiz').html(output)
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