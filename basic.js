$(document).ready(function() {

    $("#empty-div").html("<h1>Hello friends!</h1>");

    //Create new Element
    let newDiv = $("<div>");
    newDiv.text("Append new line");

    $("#empty-div").append(newDiv);

    // Add attribute - class=fancy
    newDiv.attr("class", "fancy")
    
    // Using JavaScript programmatically append each drinkList item to the "drink-options" div
    // HINT: you will need a for loop to go over each element in the list
    var drinkList = [
        "Coffee: $5",
        "Espresso: $7",
        "Cappuccino: $6",
        "Latte: $4",
        "Tea: $3",
        "Ice Coffee: $6",
        "Ice Espresso: $8",
        "Ice Latte: $6",
        "Ice Tea: $4"
    ];
    drinkList.forEach(list => {
        console.log(list);
        $("#drink-options").append(`<div>${list}</div>`);
    })


    // Clicking!
    $("#click-me").on("click", () => {
        alert("I've been clicked");
    });

    // Random button Generator
    $("#random-button").on("click", () => {
        // $("#random-button-display").text("")
        let lotteryNum = "";
        for(let i = 0; i < 7; i++){
            if(i === 6){
                lotteryNum += " + " + Math.floor(Math.random() * 45 + 1);
            }else{
                lotteryNum += Math.floor(Math.random() * 45 + 1) + " ";
            }
        }
        $("#random-button-display").text(lotteryNum);
    })



})