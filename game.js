// Iteration 2: Generate 2 random number and display it on the screen

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")

const buttons = document.getElementById("buttons")
buttons.addEventListener("click",handleOperations)

const timer = document.getElementById("timer")

// const greater_Than = document.getElementById("greater_than")

// greater_Than.addEvenListener("click",function(){handOperations(">")})
// Iteration 3: Make the options button functional

displayNumbers()
function displayNumbers(){
    num1 = randomNumber()
    num2 = randomNumber()
    number1.innerText = num1
    number2.innerText = num2
    console.log(num1,num2)
    }
    
    function randomNumber(){
       return Math.floor(Math.random() *100) + 1
    }

    let score = 0;
function handleOperations(e){
    if(e.target.id=="greater-than" && num1>num2){
        updateScore()
    }else if(e.target.id=="equal-to" && num1==num2){
        updateScore()
    }else if(e.target.id=="lesser-than" && num1<num2){
        updateScore()
    }else{
        gameover()
}
}

function updateScore(){
    time = 5
    displayNumbers()
    score++

}


function gameover(){
    localStorage.setItem("total" , score)
    location.href = "gameover.html"
}
// Iteration 4: Build a timer for the game

setInterval(showTime , 1000)

let time = 5
function showTime(){
if(time==0){
    gameover()
}else{
    time--
    timer.innerText = time;
}
}