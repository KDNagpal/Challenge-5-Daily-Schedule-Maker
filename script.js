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
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 12)) {
      setColor(row, "#B4D2E7");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 12)) {
      setColor(row, "#FF858D");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

