function startGame(){
    const userInput = prompt("Enter Your Input (Rock or Paper or Scissor)");
    const userValue=userInput.toLocaleLowerCase()
    const randomNumber=Math.floor(Math.random()*3)+1
    let computerValue;
    if(randomNumber==1) computerValue = "rock";
    else if(randomNumber==2) computerValue="paper"
    else computerValue = "scissor";

    switch (userValue) {
      case "rock":
        switch (computerValue) {
          case "rock":
            alert(userValue+ " vs "+computerValue+" Match Draw");
            break;
          case "paper":
            alert(userValue +" vs "+computerValue+" Computer Win");
            break;
          case "scissor":
            alert(userValue +" vs "+computerValue+" You Win");
            break;
        }
        break;

      case "paper":
        switch (computerValue) {
          case "rock":
            alert(userValue +" vs "+computerValue+" You Win");
            break;
          case "paper":
            alert(userValue +" vs "+computerValue+" Match Draw");
            break;
          case "scissor":
            alert(userValue +" vs "+computerValue+" Computer Win");
            break;
        }
        break;

      case "scissor":
        switch (computerValue) {
          case "rock":
            alert(userValue +" vs "+computerValue+" Computer Win");
            break;
          case "paper":
            alert(userValue +" vs "+computerValue+" You Win");
            break;
          case "scissor":
            alert(userValue +" vs "+computerValue+" Match Draw");
            break;
        }
        break;

        default:
            alert("Invalid Input")
    }

    const againToPlay=prompt("Do you want to play again? (yes/no)")
    const askAnswer=againToPlay.toLowerCase()

    if(askAnswer=="yes"){
        startGame()
    }

}

startGame()