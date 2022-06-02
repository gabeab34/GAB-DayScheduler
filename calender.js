
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
    var appointmentText = event.target.parentElement.previousElementSibling.children[0].value;
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
  $(document).ready(() => {
    if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
      var eleven = $("<p>" + localStorage["11am"] + "</p>");
      $("#11AM").append(eleven[0].innerText);
    } else {
      ("");
    }
  });
  $(document).ready(() => {
    if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
      var twelve = $("<p>" + localStorage["12pm"] + "</p>");
      $("#12PM").append(twelve[0].innerText);
    } else {
      ("");
    }
  });
  $(document).ready(() => {
    if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
      var one = $("<p>" + localStorage["1pm"] + "</p>");
      $("#1PM").append(one[0].innerText);
    } else {
      ("");
    }
  });
  $(document).ready(() => {
    if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
      var two = $("<p>" + localStorage["2pm"] + "</p>");
      $("#2PM").append(two[0].innerText);
    } else {
      ("");
    }
  });
  $(document).ready(() => {
    if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
      var three = $("<p>" + localStorage["3pm"] + "</p>");
      $("#3PM").append(three[0].innerText);
    } else {
      ("");
    }
  });
  $(document).ready(() => {
    if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
      var four = $("<p>" + localStorage["4pm"] + "</p>");
      $("#4PM").append(four[0].innerText);
    } else {
      ("");
    }
  });
  $(document).ready(() => {
    if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
      var five = $("<p>" + localStorage["5pm"] + "</p>");
      $("#5PM").append(five[0].innerText);
    } else {
      ("");
    }
  });

  
