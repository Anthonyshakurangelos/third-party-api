var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour1 = $("#hour-1");
var hour2 = $("#hour-2");
var hour3 = $("#hour-3");
var hour4 = $("#hour-4");
var hour5 = $("#hour-5");
var saveButton = document.querySelectorAll(".saveBtn");
var userInput = ".description";
var pastClassEl = $(".present");
var presentClassEl = $(".past");
var futureClassEl = $(".future");

$(function () {
  var hour = dayjs().hour();
  console.log(hour);
  // var hourNum = [hour9[0].id, hour10[0].id, hour11[0].id, hour12[0].id,
  // hour1[0].id, hour2[0].id, hour3[0].id, hour4[0].id, hour5[0].id]
  // console.log(hourNum);

  var time = dayjs().format("dddd, M-D-YYYY");
  $("#currentDay").text(time);
  $(".time-block").each(function () {
    // var hourNum = parseInt($(this).attr("id").split("-")[1]);
    var hourNum = parseInt($(this).attr("id").split("-")[1]);
    
    // for (var i = 0; hourNum.length; i++) {
    //  console.log(hour, hourNum)
    if (hour == hourNum) {
      $(`#${hourNum}`).addClass(".present");
    }
    if (hour > hourNum) {
      $(`#${hourNum}`).addClass(".past");
    }
    if (hour < hourNum) {
      $(`#${hourNum}`).addClass(".future");
    }
    // }
    
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
  });
  $(".saveBtn").on("click", function () {
    userInput = $(this).siblings(".description").val();
    hourNum = $(this).parents().attr("id");
    localStorage.setItem(hourNum, userInput);
  });
});
