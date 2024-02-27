var currentDay = $('#currentDay');
var saveButton = $('.saveBtn');
var timeBlock = $('.time-block');
var currentTime = document.getElementById('currentTime');
var dayjsHour = dayjs().format('H');
var buttonSaved = document.getElementById('saved');


function displayDate() {
  var today = dayjs();
  $(currentDay).text(today.format('dddd, MMM D, YYYY'));
  return;
};

function displayTime() {
  var time = dayjs().format('hh:mm:ss A');
  currentTime.innerText = time;
  return;
};


$(timeBlock).each(function () {
  var hour = $(this).attr('id');
  var value = localStorage.getItem(hour);
  $(this).children('.description').val(value);
});

$(function pastPresentFuture() {
  $(timeBlock).each(function () {
    var timeBlockHour = parseInt(this.id);
    $(this).toggleClass('present', timeBlockHour == dayjsHour);
    $(this).toggleClass('past', timeBlockHour < dayjsHour);
    $(this).toggleClass('future', timeBlockHour > dayjsHour);
    return;
  })
}
);
function addClasses() {
  $(timeBlock).each(function () {
    var timeBlockHour = parseInt(this.id);
    if (timeBlockHour == dayjsHour) {
      $(this).removeClass('past future').addClass('present');
    } else if (timeBlockHour < dayjsHour) {
      $(this).removeClass('future present').addClass('past');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
};

function userSave() {
  $(saveButton).on('click', function () {
    var hour = $(this).parent().attr('id');
    var userTextInput = $(this).siblings('.description').val();
    localStorage.setItem(hour, userTextInput);
    buttonSaved.style.display = "block"
    return;
  })
};




  // TODO: Add a listener for click events on the save button. This code should
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
  //
  // TODO: Add code to display the current date in the header of the page.

  $(displayDate());

  $(userSave());
  
  $(setInterval(displayTime));