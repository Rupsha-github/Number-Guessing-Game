const max = prompt("Enter the max limit of a range");

const rand = Math.floor(Math.random()*max)+1;    //generates random numbers between 1 to max

let guess = prompt("Enter your guess");
 while(true)
 {
    if(guess == "quit")
    {
        console.log("You quit");
        break;
    }
    else if(guess == rand)
    {
        console.log("Your guess was correct.The random number was",rand);
        break;
    }
    else if(guess<rand)
    {
        guess = prompt("Your guess was smaller than the generated number.Please try again.");
    }
    else{
        guess = prompt("Your guess was larger than the generated number.Please try again.");
    }
    // else{
    //     guess = prompt("Your guess was incorrect.Please try again.");
    // }
 }

