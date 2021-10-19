
// the game will have 4 parts. 
//1- get inut from user
//2- generate random input from computer
//3- compare the choice
//4- start the game

// output the user's input using if statement. 
const getUserChoice= userInput => 
{

  if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissor')
  {
  return userInput;
  }
  else 
  {
    console.log( "invalid input");
  }
};

//function to get computer's choice randomly. Math.random randomly generates a number b/w 1-3 and based on the generated number, switch staemnet will display on of the option.
const getComputerchoice = () =>
{
    let computer = Math.floor(Math.random()*3);
    switch (computer)
    {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;

       case 2:
        return 'scissor';
        break; 
    }
}
//compare the choices and determine the winner
const determineWinner= (user, computer) =>
{
    if (user === computer)
    {
        return 'it is a tie';
    }

   else if (user === 'rock')
    {
        if (computer === 'paper')
        {
            return 'Sorry, computer won';
        }
        else
        {
            return 'congratulations, you won';
        }
    }


    else if (user === 'paper')
    {
        if(computer === 'scissor')
        { 
            return 'sorry, computer won'
        }
        else
        {
            return 'congratulations, you won';
        }
        
    }

   else if (user=== 'scissor')
    {
        if (computer=== 'rock')
        {
            return 'sorry, computer won';
        }
        else
        {
            return 'congrtaulations, you won';
        }
    }
    else
    {
        return 'please try again ';
    }
}

// start playing the game
const playGame= ()=>
{// passing input-value to the function  getUserchoice
    const userChoice = getUserChoice('paper');
    //passing no value to getComputer chioce because it will generate automatically
    const computerChoice = getComputerchoice();
    // passing determineWinner function, two arguments i.e. userchoice and computerchoice
    //in this case the determineWinner function will carry userChoice-value as "paper", and a random value from computerChoice
    const winner = determineWinner(userChoice, computerChoice);


    console.log('you threw '+ userChoice);
    console.log('computer threw '+ computerChoice);
    console.log(`${winner}`);

}
playGame();