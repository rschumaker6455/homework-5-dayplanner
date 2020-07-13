/* Should display date in header but isn't working*/
var currentDay = document.getElementById('currentDay');

function displayDate() {
    var now = moment().local();
    var display = now.format('MM/DD/YYYY');
    
    currentDay.textContent = display;

    console.log(display) 
};

displayDate()

