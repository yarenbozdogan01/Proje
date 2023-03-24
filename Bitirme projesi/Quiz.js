function Question (text,chocies,answer){
    this.text = text;
    this.chocies = chocies;
    this.answer = answer;
}

//  Question prototype
Question.prototype.checkAnswer = function (answer){
    return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// Quiz Prototype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

// Quiz isFinish
Quiz.prototype.isFinish = function(){
    return this.questions.length ===
    this.questionIndex
}

// Quiz guess
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question .checkAnswer(answer)){
       this.score++; 
    }
    this.questionIndex++;
}

var q1 = new Question("Aşağıda verilen özelliklerden hangisi metallere ait bir özelliktir?",["Kırılgandır","Mattır","Isı ve elektriği iyi iletmezler","Kendi aralarında bağ yapmazlar"],
"Kendi aralarında bağ yapmazlar");

var q2 = new Question("Aşağıdakilerden hangisi bir element sınıfı değildir ?",["Metaller","Ametaller", "Halojenler","Yarı Metaller"],
"Halojenler");

var q3 = new Question("Aşağıdaki elementlerden hangisi yanlış sınıflandırılmıştır?",["Alüminyum - Metal","Hidrojen - Metal","Azot - Ametal","Bor - Yarı Metal" ],
"Hidrojen - Metal");

var q4 = new Question("Aşağıda verilen özelliklerden hangisi soygazlara ait değildir?",["Son katmanlarında 8 elekron vardır","Hepsi oda koşullarında gaz halindedir", "Kararlı yapıdadır","Isı ve elektriği iletmez"],
"Son katmanlarında 8 elekron vardır");

var q5 = new Question("Aşağıda verilen özelliklerden hangisi CI elementine ait olamaz?",["Isı ve elektriği iletir","Ametaldir","Mattır","Klor elementi ile bileşik oluşturabilir" ],
"Isı ve elektriği iletir");

var questions = [q1,q2,q3,q4,q5];

//  Start Quiz

var quiz = new Quiz(questions);

loadQuestion();


function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{

        var question = quiz.getQuestion();
        var choices = question.chocies;

        document.querySelector('#question')
         .textContent = question.text;

         for(var i=0; i<choices.length;i++){
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];

            guess('btn'+i,choices[i]);
         }

         
    }  
}

function guess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion()
    }
}

function showScore(){
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML = html;
}



