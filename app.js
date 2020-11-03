function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Who develop C language?", ["Guido van Rossum", "Dennis Ritchie","James Gosling", "Bjarne Stroustrup"], "Dennis Ritchie"),

    new Question("Who develop C++ language?", ["Guido van Rossum", "Dennis Ritchie","Bjarne Stroustrup", "James Gosling"], "Bjarne Stroustrup"),
    
    new Question("Who develop Python?", ["James Gosling", "Bjarne Stroustrup","Dennis Ritchie", "Guido van Rossum"], "Guido van Rossum"),

    new Question("Who design Java language?", ["Dennis Ritchie", "Guido van Rossum", "James Gosling","Bjarne Stroustrup"], "James Gosling"),

    new Question("Who develop Node js language?", ["Dennis Ritchie", "Guido van Rossum", "Ryan Dahl","Bjarne Stroustrup"], "Ryan Dahl"),

    new Question("Who develop Ruby language?", ["Yukihiro 'Matz' Matsumoto", "Guido van Rossum","Dennis Ritchie", "James Gosling"], "Yukihiro 'Matz' Matsumoto"),

    new Question("Who develop JavaScript language?", ["Dennis Ritchie", "Guido van Rossum", "James Gosling","Brendan Eich"], "Brendan Eich"),

    new Question("Who develop HTML ?", ["Tim Berners-lee", "Yukihiro 'Matz' Matsumoto", "James Gosling","Brendan Eich"], "Tim Berners-lee"),
    
    new Question("Who develop Bootstrap ?" , ["Mark Otto", "Guido van Rossum", "James Gosling","Ryan Dahl"], "Mark Otto"),


];


var quiz = new Quiz(questions);


populate();





