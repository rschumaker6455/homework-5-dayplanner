/* Should display date in header but isn't working*/
var currentDay = document.getElementById('currentDay')

function displayDate() {
    var now = moment().local();
    var display = now.format('MM/DD/YYYY');
    
    currentDay.textContent = display;
};

displayDate()

/*Display*/

var btn = document.querySelector('.btn');
var textArea = document.querySelector('.text');
var displayText = JSON.parse(localStorage.getItem('textArea'))

function saveText() {
    document.querySelector('.text').textContent = displayText
}

document.querySelector('.btn').addEventListener('click', function(){
    var textArea = document.querySelector('.text').value;
    localStorage.setItem('textArea',JSON.stringify(textArea))
    
})

saveText()