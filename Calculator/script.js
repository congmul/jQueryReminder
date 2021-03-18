$(document).ready(function () {
    $("body").css("background-color", "rgb(230,230,230)")

    // Calculator Frame
    $(".calculator-frame").css("width", "375px")
    $(".calculator-frame").css("background-color", "black")
    $(".calculator-frame").css("border-radius", "5px")
    $(".calculator-frame").css("margin", "10px")
    $(".calculator-frame").css("margin-top", "50px")
    $(".calculator-frame").css("padding", "20px")

    $(".calculator-frame").on("mouseover", function () {
        $(".calculator-frame").css("box-shadow", "0px 0px 10px #888888")
    })
    $(".calculator-frame").on("mouseout", function () {
        $(".calculator-frame").css("box-shadow", "0px 0px 0px #888888")
    })

    // Calculator Body
    $("#calculator-body").css("margin", "0")
    $("#calculator-body").css("padding", "0")

    // Create Top menu
    $("#calculator-topMenu").css("margin", "0")
    $("#calculator-topMenu").css("padding", "0")
    $("#calculator-topMenu").css("padding-left", "4px")
    let topMenuArr = ["AC", "^", "%", "/"];
    for (let i = 0; i < topMenuArr.length; i++) {
        let btnEl = $("<button>");
        btnEl.attr("class", "btn btn-info btn-warning btn-operator button-style");
        btnEl.attr("value", topMenuArr[i])
        // console.log(topMenuArr[i])
        btnEl.css("width", "78px")
        btnEl.css("font-size", "40px")
        btnEl.text(topMenuArr[i]);
        $("#calculator-topMenu").append(btnEl);
    }
    

    // Create Operator
    $("#calculator-operator").css("padding-left", "0")
    $("#calculator-operator").css("margin-left", "-28px")
    let operatorArr = ["x", "-", "+", "="];
    for (let i = 0; i < operatorArr.length; i++) {
        let btnEl = $("<button>");
        btnEl.attr("class", "btn btn-info btn-warning btn-operator button-style");
        btnEl.attr("value", operatorArr[i])
        // console.log(operatorArr[i])
        btnEl.css("width", "78px")
        btnEl.css("font-size", "40px")
        btnEl.text(operatorArr[i]);
        $("#calculator-operator").append(btnEl);
    }



    // Create Number-Buttons
    $("#calculator-number").css("margin", "0")
    $("#calculator-number").css("padding", "0")
    $("#calculator-number").css("padding-left", "4px")
    let numberArr = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
    for (let i = 0; i < numberArr.length; i++) {

        if (numberArr[i] === 0) {
            let btnEl = $("<button>");
            btnEl.attr("class", "btn btn-secondary btn-choice button-style");
            btnEl.attr("value", numberArr[i])
            // console.log(numberArr[i])
            btnEl.css("width", "160px")
            btnEl.css("font-size", "40px")
            btnEl.text(numberArr[i]);
            $("#calculator-number").append(btnEl);

        } else {
            let btnEl = $("<button>");
            btnEl.attr("class", "btn btn-secondary btn-choice button-style");
            btnEl.attr("value", numberArr[i])
            // console.log(numberArr[i])
            btnEl.css("width", "78px")
            btnEl.css("font-size", "40px")
            btnEl.text(numberArr[i]);
            $("#calculator-number").append(btnEl);
        }

    }

    // Display window
    $("#calculator-display").css("height", "100px");
    $("#calculator-display").css("margin-bottom", "5px");
    $("#calculator-display").css("padding", "15px");
    $("#calculator-display").css("font-size", "50px");
    $("#calculator-display").css("text-align", "right");
    $("#calculator-display").css("color", "white");

    // When Clicking Numbers
    let displayNumbers = "0";
    let firstNumber = "";
    let secondNumber = "";
    let operator = "";
    $("#calculator-display").text(displayNumbers);

    // When you use $(this).val(), never use () => {}
    $(".btn-choice").on("click", function () {
        if(operator !== ""){
            if (displayNumbers === "0") {
                secondNumber = $(this).val();
                displayNumbers = secondNumber
                $("#calculator-display").text(displayNumbers);
            } else {
                if (secondNumber.length < 9) {
                    secondNumber += $(this).val();
                    displayNumbers = secondNumber;
                    if (secondNumber.length > 3) {
                        let arr = secondNumber.split("");
                        displayNumbers = "";
                        arr.forEach((number, index) => {
                            if (index === secondNumber.length - 3) displayNumbers += ","
                            if (index === secondNumber.length - 6 && secondNumber.length !== 6) displayNumbers += ","
                            displayNumbers += number
                        })
                        $("#calculator-display").text(displayNumbers);
                    } else {
                        $("#calculator-display").text(displayNumbers);
                    }
                }
            }
        }else{   
            if (displayNumbers === "0") {
                firstNumber = $(this).val();
                displayNumbers = firstNumber
                $("#calculator-display").text(displayNumbers);
            } else {
                if (firstNumber.length < 9) {
                    firstNumber += $(this).val();
                    displayNumbers = firstNumber;
                    if (firstNumber.length > 3) {
                        let arr = firstNumber.split("");
                        displayNumbers = "";
                        arr.forEach((number, index) => {
                            if (index === firstNumber.length - 3) displayNumbers += ","
                            if (index === firstNumber.length - 6 && firstNumber.length !== 6) displayNumbers += ","
                            displayNumbers += number
                        })
                        $("#calculator-display").text(displayNumbers);
                    } else {
                        $("#calculator-display").text(displayNumbers);
                    }
                }
            }
        }
    })

    // When Click Operator buttons
    $(".btn-operator").on("click", function(){
        console.log($(this).val())
        let oper = $(this).val();
        if(firstNumber !== ""){
            switch(oper){
                case "AC":
                    firstNumber = "";
                    secondNumber = "";
                    displayNumbers = "0";
                    $("#calculator-display").text(displayNumbers);
                    break;
                case "%":
                    firstNumber = parseFloat(firstNumber) / 100
                    displayNumbers = String(firstNumber)
                    $("#calculator-display").text(displayNumbers);
                    break;
                case "^":
                    operator = "^";
                    break;
                case "/":
                    operator = "/";
                    break;
                case "x":
                    operator = "x";
                    break;
                case "-":
                    operator = "-";
                    break;
                case "+":
                    operator = "+";
                    break;
                case "=":
                    if(operator !=="" && secondNumber !== ""){

                        switch(operator){
                            case "^":
                                displayNumbers = String(Math.pow(parseFloat(firstNumber), parseFloat(secondNumber)))                               
                                firstNumber = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
                            break;
                            case "/":
                                displayNumbers = String(parseFloat(firstNumber)/parseFloat(secondNumber))                               
                                firstNumber = parseFloat(firstNumber)/parseFloat(secondNumber);
                            break;
                            case "x":
                                displayNumbers = String(parseFloat(firstNumber)*parseFloat(secondNumber))                               
                                firstNumber = parseFloat(firstNumber)*parseFloat(secondNumber);
                            break;
                            case "-":
                                displayNumbers = String(parseFloat(firstNumber)-parseFloat(secondNumber))                               
                                firstNumber = parseFloat(firstNumber)-parseFloat(secondNumber);
                            break;
                            case "+":
                                displayNumbers = String(parseFloat(firstNumber)+parseFloat(secondNumber))                               
                                firstNumber = parseFloat(firstNumber)+parseFloat(secondNumber);
                            break;
                        }


                        secondNumber = "";
                        operator = "";

                        if(displayNumbers.length > 3){
                            let tempResults = displayNumbers;
                            let arr = tempResults.split("");
                            displayNumbers = "";
                            arr.forEach((number, index) => {
                            if (index === tempResults.length - 3) displayNumbers += ","
                            if (index === tempResults.length - 6 && displayNumbers.length !== 6) displayNumbers += ","
                            displayNumbers += number
                        })
                        $("#calculator-display").text(displayNumbers);
                        }else{
                            $("#calculator-display").text(displayNumbers);
                        }
                        
                    }
                    break;

            }
        }    
    })  



});