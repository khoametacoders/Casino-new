document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("money-input-withdraw");
  var buttons = document.querySelectorAll(".button-money");

  buttons.forEach(function (button) {
    var amount = parseFloat(button.getAttribute("data-amount"));
    button.addEventListener("click", function () {
      input.value = formatNumber(amount);
    });
  });

  // input.addEventListener("input", function () {
  //   var value = input.value.replace(/,/g, "");
  //   input.value = formatNumber(value);
  // });

  // $("#money-input-withdraw").keyup(function (event) {
  //   // skip for arrow keys
  //   if (event.which >= 37 && event.which <= 40) return;
  //   // format number
  //   $(this).val(function (index, value) {
  //     return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   });
  // });

  //close alert
  $(".close-alert").click(function () {
    $("#alert-withdraw-applicant").removeClass("visible");
  });

  //Submit
  $("#submit-withdraw").click(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the value of the input field
    var input = $("#money-input-withdraw").val();
    var amount = parseFloat(input.replace(/,/g, ""));

    $("#alert-withdraw-applicant").addClass("visible");
    // Reset the form or perform other operations
  });
  $("#button-reset-withdraw").click(function () {
    input.value = "";
  });
});

function formatNumber(number) {
  return number.toLocaleString("en-US");
}
