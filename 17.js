// nested if else

//  winning number 19;
// 19 your guess is right
// 17 too low
// 20 too high
// prompt takes input in string


let winningNumber = 19;
let userGuess = +prompt("Guess a Number: ");
console.log(typeof userGuess);

if(userGuess===winningNumber)
{
    console.log("Your guess is right!!!");
}
else
{
    if(userGuess < winningNumber)
    {
        console.log("too low !!!");
    }
    else{
        console.log("too  high!!!");
    }
}