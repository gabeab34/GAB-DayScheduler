
var today = moment();
$(".currentdate").append(today.format("dddd, MMMM Do"));

var timeSlot = $(".hour");
var now = parseInt(moment().format("H"));

$.each(timeSlot, function (i, hour) {
  var hourId = parseInt($(this).attr("id"));
  if (hourId === now) {
    $(this).next().addClass("present");
  } else if (hourId < now) {
    $(this).next().addClass("past");
  } else if (hourId > now) {
    $(this).next().addClass("future");
  }
});