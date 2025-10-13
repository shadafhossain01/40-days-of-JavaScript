const randomValue=Math.floor(Math.random()*50)+1
let chanceCount=5

function startGuccesing(){
    const userValue= prompt("Enter your Guccesing Number (0 to 50)")

    if(!userValue) {
        alert("You Need to Enter a Value");
    }

    if(randomValue>userValue){
        alert("Random Value is Higher then you Gucess")
    }
    else if(randomValue<userValue){
        alert("Random Value is Lower then you Gucess")
    }
    else{
        alert("Your Gucess is Right");
    }
    chanceCount--;
    if (chanceCount == 0) {
        alert("Random Value is "+randomValue)
      return;
    }

    startGuccesing()
}

startGuccesing()