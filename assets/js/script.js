/* Array of 10 objects, each object contains 
data for question, options, and correct answer*/

const quizQuestions = [{
        Question: 'Who possesses the ring of power at the start of the trilogy?',
        a: 'Gandalf',
        b: 'Bilbo',
        c: 'Frodo',
        d: 'Sauron',
        answer: 4
    },
    {
        Question: 'Who do the hobbits encounter at the Prancing Pony? ',
        a: 'Gandalf',
        b: 'Legolas',
        c: 'Strider',
        d: 'Boromir',
        answer: 3
    },
    {
        Question: 'How many members make up the fellowship of the ring? ',
        a: 'seven',
        b: 'eight',
        c: 'nine',
        d: 'ten',
        answer: 3

    },
    {
        Question: 'What is the name of the elf in the fellowship?',
        a: 'Gimli',
        b: 'Legolas',
        c: 'Merry',
        d: 'Boromir',
        answer: 2

    },
    {
        Question: 'What is the name of the dwarf in the fellowship? ',
        a: 'Gimli',
        b: 'Legolas',
        c: 'Merry',
        d: 'Boromir',
        answer: 1
    },
    {

        Question: 'When the pass of Caradhras is blocked, where does Frodo say the fellowship should go? ',
        a: 'Rivendell',
        b: 'Lothlorien',
        c: 'Moria',
        d: 'Minas Tirith',
        answer: 1

    },
    {
        Question: 'Who is the first member of the fellowship to be separated from the group? ',
        a: 'Merry and Pippin are carried off by orcs and Uruk-hai',
        b: 'Boromir is killed',
        c: 'Frodo and Sam leave the others behind',
        d: 'All of the above',
        answer: 4

    },
    {
        Question: 'Who has been following Sam and Frodo? ',
        a: 'Gollum',
        b: 'Sméagol',
        c: 'A and B',
        d: 'None of the above',
        answer: 3

    },
    {
        Question: 'Who is the king of Rohan?',
        a: 'Wormtongue',
        b: 'Théoden',
        c: 'Éowyn',
        d: 'Éomer',
        answer: 2

    }
]

//set constants for quiz game

const userSetupEl = document.querySelector('#user-setup')
const quizWrapper = document.querySelector('#quiz-wrapper')
const quizCompleteEl = document.querySelector('#quiz-complete')
const questionEl = document.querySelector('#question')
const submitQ = document.querySelector('#quiz-submit')
const answer_a = document.querySelector('#answer_a')
const answer_b = document.querySelector('#answer_b')
const answer_c = document.querySelector('#answer_c')
const answer_d = document.querySelector('#answer_d')