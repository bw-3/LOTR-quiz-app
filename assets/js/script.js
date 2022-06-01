/* Array of 10 objects, each object contains 
data for question, options, and correct answer*/

const quizQuestions = [{
        Question: 'Who possesses the ring of power at the start of the trilogy?',
        a: 'Gandalf',
        b: 'Bilbo',
        c: 'Frodo',
        d: 'Sauron',
        answer: 'b',
    },
    {
        Question: 'Who do the hobbits encounter at the Prancing Pony? ',
        a: 'Gandalf',
        b: 'Legolas',
        c: 'Strider',
        d: 'Boromir',
        answer: 'c',
    },
    {
        Question: 'How many members make up the fellowship of the ring? ',
        a: 'seven',
        b: 'eight',
        c: 'nine',
        d: 'ten',
        answer: 'c',

    },
    {
        Question: 'What is the name of the elf in the fellowship?',
        a: 'Gimli',
        b: 'Legolas',
        c: 'Merry',
        d: 'Boromir',
        answer: 'b',

    },
    {
        Question: 'What is the name of the dwarf in the fellowship? ',
        a: 'Gimli',
        b: 'Legolas',
        c: 'Merry',
        d: 'Boromir',
        answer: 'a',
    },
    {

        Question: 'When the pass of Caradhras is blocked, where does Frodo say the fellowship should go? ',
        a: 'Rivendell',
        b: 'Lothlorien',
        c: 'Moria',
        d: 'Minas Tirith',
        answer: 'a',

    },
    {
        Question: 'Who is the first member of the fellowship to be separated from the group? ',
        a: 'Merry and Pippin are carried off by orcs and Uruk-hai',
        b: 'Boromir is killed',
        c: 'Frodo and Sam leave the others behind',
        d: 'All of the above',
        answer: 'd',

    },
    {
        Question: 'Who has been following Sam and Frodo? ',
        a: 'Gollum',
        b: 'Sméagol',
        c: 'A and B',
        d: 'None of the above',
        answer: 'c',

    },
    {
        Question: 'Who is the king of Rohan?',
        a: 'Wormtongue',
        b: 'Théoden',
        c: 'Éowyn',
        d: 'Éomer',
        answer: 'b',

    }
]

//set constants for quiz game

const userSetupEl = document.querySelector('#user-setup')
const quizWrapper = document.querySelector('#quiz-wrapper')
const quizCompleteEl = document.querySelector('#quiz-complete')
const questionEl = document.querySelector('#question')
const submitQ = document.querySelector('#quiz-submit')
const answer_a = document.querySelector('#a')
const answer_b = document.querySelector('#b')
const answer_c = document.querySelector('#c')
const answer_d = document.querySelector('#d')
const answerEls = document.querySelectorAll('.answers')

let questionData = 0
let currentScore = 0

/* Generates quiz data from quizQuestions array
and fills the DOM with it */
let currentQuiz = quizQuestions[questionData]

function loadQuiz() {
    questionEl.textContent = currentQuiz.Question
    answer_a.textContent = currentQuiz.a
    answer_b.textContent = currentQuiz.b
    answer_c.textContent = currentQuiz.c
    answer_d.textContent = currentQuiz.d
    checkAnswer();
}
// when user click on any answer return the id of the clicked element and match against the correct answer.
function checkAnswer() {
    for (userAnswer of answerEls) {
        (function(userAnswer) {
            userAnswer.addEventListener('click', function() {
                console.log(userAnswer.id);

                if (userAnswer.id === currentQuiz.answer) {
                    console.log('correct')
                    currentQuiz++
                } else {
                    console.log('incorrect');

                }


            })


        })(userAnswer)
    }
}

loadQuiz();


/*
    answerEls.forEach(answerEl => {
        answerEl.addEventListener('click', () => {
            userAnswer = answerEl.id
            checkAnswer();
            console.log("user selected " + userAnswer);
            return userAnswer

        })

    });
    */