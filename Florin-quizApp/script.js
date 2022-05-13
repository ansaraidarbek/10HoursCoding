const quizData= [
    {
        question: 'How old are Angsar?',
        a: '20',
        b: '26',
        c: '21',
        d: '23',
        correct: 'c'
    },
    {
        question: 'What is the name of the creator of this app?',
        a: 'Florin',
        b: 'Angsar',
        c: 'Grey',
        d: 'Pahdra',
        correct: 'a'
    },
    {
        question: 'Where are Angsar from?',
        a: 'NY',
        b: 'London',
        c: 'Astana',
        d: 'Shymkent',
        correct: 'd'
    },
    {
        question: 'What does HTML stands for?',
        a: 'Harm To Mine Language',
        b: 'Hypertext Markup Language',
        c: 'Hello To Me Losers',
        d: 'Who ever will use this will cry',
        correct: 'b'
    }
]

const answerEls = document.querySelectorAll("input[name=answer]")
const quiz = document.getElementById("quiz"); 
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");
var result=0;

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
           answer = answerEl.id
        }
    });

    return answer;

}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked= false;
    });

}

submit.addEventListener('click', () =>{
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            result++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
                <h2>You answered correctly at ${result}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>
            ` ;
        }
    }
});