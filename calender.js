
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

$(".saveBtn").on("click", (event) => {
    var appointmentText =
      event.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(event.target.attributes[0].value, appointmentText);
  });

  $(document).ready(() => {
    if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
      var nine = $("<p>" + localStorage["9am"] + "</p>");
      $("#9AM").append(nine[0].innerText);
    } else {
      ("");
    }
  });
  $(document).ready(() => {
    if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
      var ten = $("<p>" + localStorage["10am"] + "</p>");
      $("#10AM").append(ten[0].innerText);
    } else {
      ("");
    }
  });