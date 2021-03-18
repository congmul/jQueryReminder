$(document).ready(function() {

    let numbers = "";

    for(let i = 0; i < 10; i++){
        let btnEl = $("<button>");
        btnEl.attr("class", "btn btn-primary btn-choice");
        btnEl.attr("value", i)
        btnEl.text(i);
        $("#calculator-body").append(btnEl);
    }

    $(".btn-choice").on("click", function() {
        numbers += $(this).val();
        $("#calculator-display").text(numbers);
    })

    // When you use $(this).val(), never use () => {}
    $(".btn-cho").on("click", function() {
        console.log($(this).val());
    });
});