$(document).ready(function() {

    // Here we create the on click event that gets the user's pick
    $(".btn-choice").on("click", function() {

      console.log($(this).val());
        
      // Add code to have the computer guess a random number between 1 and 4
      let computerGuessNumber = Math.floor((Math.random() * 4 + 1));
      $("#computer-pick").text(computerGuessNumber);
      // Then determine which button was clicked
      let userSelectingNumber = $(this).val();
      // Compare the computer and user guess
       // Inform the user if the've guessed correctly or incorrectly
      if(parseInt(userSelectingNumber) === parseInt(computerGuessNumber)){
        $("#result").text("correctly")
      }else{
        $("#result").text("incorrectly")
      }

    });
  });