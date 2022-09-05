const quizData = [
    {
        question: "Which language among the below runs in a web browser?",
        a: "Java",
        b: "C",
        c: "javascript",
        d: "Python",
        correct: "c",
    },
    {
        question: "Which is a NoSQL database?",
        a: "MySQL",
        b: "MongoDB",
        c: "Oracle",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Centre Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Sheet Styles",
        d: "Cats SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which is not a Javacript framework?",
        a: "AngularJS",
        b: "Danjo",
        c: "ReactJS",
        d: "none of the above",
        correct: "b",
    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const choice1 = document.getElementById('choice0')
const choice2 = document.getElementById('choice1')
const choice3 = document.getElementById('choice2')
const choice4 = document.getElementById('choice3')
const submitBtn = document.getElementById('submit')

let currentQuestion = 0;
let score = 0;

loadQuestions();
 function loadQuestions(){
    deselectAnswers();
    const currentQuestionsData = quizData[currentQuestion];
    questionEl.innerText = currentQuestionsData.question;
    choice1.innerText = currentQuestionsData.a;
    choice2.innerText = currentQuestionsData.b;
    choice3.innerText = currentQuestionsData.c;
    choice4.innerText = currentQuestionsData.d;
    showProgress();
    
 }

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelectedAnswer(){
    let answer; 
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function showProgress(){
    var currentQuestionNumber = currentQuestion+1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " +currentQuestionNumber + "of "+ quizData.length;
};

submitBtn.addEventListener('click',()=>{
    const answer = getSelectedAnswer();
    if(answer){
        if(answer ===quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        
         
        if(currentQuestion < quizData.length){
            //showProgress();
            loadQuestions(); 
                      
        }
        else{
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})

