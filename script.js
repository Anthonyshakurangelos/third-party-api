var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour1 = $("#hour-13");
var hour2 = $("#hour-14");
var hour3 = $("#hour-15");
var hour4 = $("#hour-16");
var hour5 = $("#hour-17");
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
    console.log(hourNum)
    // for (var i = 0; hourNum.length; i++) {
    //  console.log(hour, hourNum)
    if (hour == hourNum) {
      $(`#hour-${hourNum}`).addClass("present");
    }
    if (hour > hourNum) {
      $(`#hour-${hourNum}`).addClass("past");
    }
    if (hour < hourNum) {
      $(`#hour-${hourNum}`).addClass("future");
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
  $("#hour-9").children(".description").val(localStorage.getItem('hour-9'));
  $("#hour-10").children(".description").val(localStorage.getItem('hour-10'));
  $("#hour-11").children(".description").val(localStorage.getItem('hour-11'));
  $("#hour-12").children(".description").val(localStorage.getItem('hour-12'));
  $("#hour-13").children(".description").val(localStorage.getItem('hour-13'));
  $("#hour-14").children(".description").val(localStorage.getItem('hour-14'));
  $("#hour-15").children(".description").val(localStorage.getItem('hour-15'));
  $("#hour-16").children(".description").val(localStorage.getItem('hour-16'));
  $("#hour-17").children(".description").val(localStorage.getItem('hour-17'));

});
