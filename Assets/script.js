/*
    Start out on plain screen with a button that listens for a click to start the timer
        - event listener function (start quiz) will contain a timer and display the next page
    create a function for clicking on wrong answers and clicking on correct answers for each page
        - function will change the page at the end regardless
        - correct answer function will add a tally to correct answers and display correct on next page
        - wrong answer function will not add a tally and will just change the page with the word incorrect
    create an event listener for each answer on the page, using corresponding correct and incorrect functions
    display final score with a prompt to add initials
        - submit button has event listener that logs the user input into local storage along with score
    event listener for clear high scores will wipe local storage and delete the saved scores from screen
    go back button has event listener that will redirect back to main page -> use #id for main page
    
    
*/
var startButton = document.querySelector("#start-button");
var question = document.querySelector(".title");
var optionOne = document.getElementById("option-one");
var optionTwo = document.getElementById("option-two");
var optionThree = document.getElementById("option-three");
var optionFour = document.getElementById("option-four");
var timer = document.querySelector(".timer");
var secondsLeft = 120;
var finalScore=0;

var names = ["","","","",""];


function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          sendMessage();
        }
    
      }, 1000);
}

function cycleQuiz() {
    startButton.addEventListener("click", function() {
        startButton.setAttribute("class", "blank");
        question.textContent="Commonly used Data Types DO NOT include?";
        optionOne.setAttribute("class", "incorrect");
        optionTwo.setAttribute("class", "incorrect");
        optionThree.setAttribute("class", "correct");
        optionFour.setAttribute("class", "incorrect");
        optionOne.textContent="1. strings";
        optionTwo.textContent="2. booleans";
        optionThree.textContent="3. alerts";
        optionFour.textContent="4. numbers";
        setTime();
    });
    if (finalScore===0) {
    optionOne.addEventListener("click", function() {
        secondsLeft=secondsLeft-10;
        question.textContent="Arrays in Javascript can be used to store?";
        optionOne.setAttribute("class", "incorrect");
        optionTwo.setAttribute("class", "incorrect");
        optionThree.setAttribute("class", "incorrect");
        optionFour.setAttribute("class", "correct");
        optionOne.textContent="1. other arrays";
        optionTwo.textContent="2. numbers";
        optionThree.textContent="3. strings";
        optionFour.textContent="4. all of the above";
    });

    optionTwo.addEventListener("click", function() {
        secondsLeft=secondsLeft-10;
        question.textContent="Arrays in Javascript can be used to store?";
        optionOne.setAttribute("class", "incorrect");
        optionTwo.setAttribute("class", "incorrect");
        optionThree.setAttribute("class", "incorrect");
        optionFour.setAttribute("class", "correct");
        optionOne.textContent="1. other arrays";
        optionTwo.textContent="2. numbers";
        optionThree.textContent="3. strings";
        optionFour.textContent="4. all of the above";
    });

    optionThree.addEventListener("click", function() {
        finalScore++;
        question.textContent="Arrays in Javascript can be used to store?";
        optionOne.setAttribute("class", "incorrect");
        optionTwo.setAttribute("class", "incorrect");
        optionThree.setAttribute("class", "incorrect");
        optionFour.setAttribute("class", "correct");
        optionOne.textContent="1. other arrays";
        optionTwo.textContent="2. numbers";
        optionThree.textContent="3. strings";
        optionFour.textContent="4. all of the above";
    });

    optionFour.addEventListener("click", function() {
        secondsLeft=secondsLeft-10;
        question.textContent="Arrays in Javascript can be used to store?";
        optionOne.setAttribute("class", "incorrect");
        optionTwo.setAttribute("class", "incorrect");
        optionThree.setAttribute("class", "incorrect");
        optionFour.setAttribute("class", "correct");
        optionOne.textContent="1. other arrays";
        optionTwo.textContent="2. numbers";
        optionThree.textContent="3. strings";
        optionFour.textContent="4. all of the above";
    });
}

    if (finalScore>=0){
    optionOne.addEventListener("click", function() {
        question.textContent="All done!";
        optionOne.setAttribute("class", "blank");
        optionTwo.setAttribute("class", "blank");
        optionThree.setAttribute("class", "blank");
        optionFour.setAttribute("class", "blank");
        var x = document.createElement("input");
        x.setAttribute("type", "text");
        x.setAttribute("name", "Initials");
        document.body.appendChild(x);
        localStorage.setItem("highscore", x);
    });
}
}

cycleQuiz();