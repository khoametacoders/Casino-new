document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("money-input");
  var buttons = document.querySelectorAll(".button-money");

  buttons.forEach(function (button) {
    var amount = parseFloat(button.getAttribute("data-amount"));
    button.addEventListener("click", function () {
      input.value = formatNumber(amount);
    });
  });

  input.addEventListener("input", function () {
    var value = input.value.replace(/,/g, "");
    input.value = formatNumber(value);
  });

  $("#money-input").keyup(function (event) {
    // skip for arrow keys
    if (event.which >= 37 && event.which <= 40) return;
    // format number
    $(this).val(function (index, value) {
      return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
  });

  //close alert
  $(".close-alert").click(function () {
    $("#alert-withdraw-money-deposit").removeClass("visible");
  });

  //Submit
  $("#submit-deposit").click(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the value of the input field
    var input = $("#money-input").val();
    var amount = parseFloat(input.replace(/,/g, ""));
    console.log("amount:", amount);

    if (amount < 10000) {
      // $("#alert-withdraw-money-deposit").addClass("visible");
      $("#notif").modal("show");
    } 
    // Reset the form or perform other operations
  });
  $("#button-reset-deposit").click(function () {
    input.value = "";
  });

  //ALERT RE-INQUIRE
  $("#button-inquiry-deposit").click(function () {
    $("#alert-reinquire-deposit").addClass("visible");
  });
  // //close alert re-inquire
  $(".close-alert").click(function () {
    $("#alert-reinquire-deposit").removeClass("visible");
  });
});

function formatNumber(number) {
  return number.toLocaleString("en-US");
}
