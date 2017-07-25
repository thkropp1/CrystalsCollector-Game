
//Return a random number between min and max
function randomIntFromInterval(min, max) {
    return parseInt(Math.floor(Math.random()*(max-min+1)+min));
}

// Initialize or reset the game
function initializeGame() {

      // reset random number and total
      $("#random-number, #totalscore").empty();
      totalscore = 0; //reset total score counter
      
      $("#totalscore").html(totalscore); //print to screen
      $("#win").html("Wins: " + win); //print to screen
      $("#losses").html("Losses: " + losses); //print to screen
      $("#totalscore").html(totalscore); //print to screen

      // Get new random numbers and assign them to the buttons
      crystal1 = randomIntFromInterval(1, 12);
      console.log("crystal1: " + crystal1);
      $("#button-1").attr("value", crystal1);
      crystal2 = randomIntFromInterval(1, 12);
      console.log("crystal2: " + crystal2);
      $("#button-2").attr("value", crystal2);
      crystal3 = randomIntFromInterval(1, 12);
      console.log("crystal3: " + crystal3);
      $("#button-3").attr("value", crystal3);
      crystal4 = randomIntFromInterval(1, 12);
      console.log("crystal4: " + crystal4);
      $("#button-4").attr("value", crystal4);
      randNum = randomIntFromInterval(19, 120);
      console.log("Random number: " + randNum);
      $("#random-number").html(randNum); //print to screen

} // function


// Play the game
function pressCrystal() {

      $(document).ready(function() {
  
        // Add an on click listener to all elements that have the class "number"
        $(".number").on("click", function() {
       
            console.log("this.value = " + this.value);
            // Add clicked value to totalscore
            totalscore = (parseInt(totalscore) + parseInt(this.value)); 

            if (totalscore === randNum) { // Total score matches the random number
                $("#totalscore").html(totalscore); //print to screen
                //alert("You won!");
                win++; // increase win counter
                $("#win").html("Wins: " + win); //print to screen
                console.log("Wins: " + win);
                initializeGame(); //reset game
            } else if (totalscore > randNum) { // Total score went over the random number
                $("#totalscore").html(totalscore); //print to screen
                //alert("Sorry, your score went over the random number.");
                losses++; // increase losses counter
                $("#losses").html("Losses: " + losses); //print to screen
                console.log("Losses: " + losses);
                initializeGame(); //reset game
            } else if (totalscore < randNum) { //add the points to the total score
                $("#totalscore").html(totalscore); //print to screen
                console.log("totalscore: " + totalscore);  
            } //else if
        }); //.number  
      }); //document.ready  
}