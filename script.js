const secretNumber=Math.floor(Math.random()*10)+1;
let attempt=0;
let guessedCorrectly=false

function checkGuess(){
    const userInput=document.getElementById("userGuess").value
    const guess=Number(userInput)
    attempt++;

    if(guess==secretNumber){
        guessedCorrectly=true
        document.getElementById("feedback").textContent = '🎉 Correct! You guessed it in ${attempt} tries';
    }else if (guess<secretNumber){
        document,getElementById("feedback").textContent = "📉 Too low! Try again.";
    }else if (guess>secretNumber){
        document.getElementById("feedback").textContent="📈 Too high! Try again.";
    }
}