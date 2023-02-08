// code was borrowed/modified from https://stackoverflow.com/questions/34625764/moment-js-dynamically-update-time-in-seconds
var update = function () {
    day = moment(new Date())
    timeDisplay.html(day.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    timeDisplay = $('#currentDay')
    update();
    setInterval(update, 1000);
});

// code was borrowed/modified from https://stackoverflow.com/questions/59995703/trying-to-change-background-color-based-off-if-the-hour-is-in-the-past-current

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    if (currentHour === rowHour) {
      setColor(row, "#9CFC97")
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 24)) {
      setColor(row, "#B4D2E7");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 24)) {
      setColor(row, "#FF858D");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

//saved entered text into local storage
$(".saveBtn").click(function() {
  var textarea = $(this).siblings(".description");
  var id = textarea.data("hour");
  localStorage.setItem(id, textarea.val());
});

//get info from local stoage and dispalys it in proper hour block on site load
$(document).ready(function() {
  $(".description").each(function() {
    var textarea = $(this);
    var id = textarea.data("hour");
    textarea.val(localStorage.getItem(id));
  });
});

// removes all saved local storage on button click and reloads the site
const clearBtn = document.querySelector("#remove");
  clearBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
  });