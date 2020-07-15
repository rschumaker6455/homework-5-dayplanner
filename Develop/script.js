/* Should display date in header but isn't working*/
var currentDay = document.getElementById('currentDay')

function displayDate() {
    var now = moment().local();
    var display = now.format('LLLL');
    
    currentDay.textContent = display;
};

displayDate()


var update = function() {
    document.getElementById('currentDay')
    .innerHTML = moment().format('LLLL');
}
setInterval(update, 60000);

/*Display*/

var btn = document.querySelector('.btn');
var textArea9 = document.querySelector('.text-9');
var textArea10 = document.querySelector('.text-10');
var textArea11 = document.querySelector('.text-11');
var textArea12 = document.querySelector('.text-12');
var textArea1 = document.querySelector('.text-1');
var textArea2 = document.querySelector('.text-2');
var textArea3 = document.querySelector('.text-3');
var textArea4 = document.querySelector('.text-4');
var textArea5 = document.querySelector('.text-5');
var displayText9 = JSON.parse(localStorage.getItem('textArea9'))
var displayText10 = JSON.parse(localStorage.getItem('textArea10'))
var displayText11 = JSON.parse(localStorage.getItem('textArea11'))
var displayText12 = JSON.parse(localStorage.getItem('textArea12'))
var displayText1 = JSON.parse(localStorage.getItem('textArea1'))
var displayText2 = JSON.parse(localStorage.getItem('textArea2'))
var displayText3 = JSON.parse(localStorage.getItem('textArea3'))
var displayText4 = JSON.parse(localStorage.getItem('textArea4'))
var displayText5 = JSON.parse(localStorage.getItem('textArea5'))

function saveText() {
    document.querySelector('.text-9').textContent = displayText9
    document.querySelector('.text-10').textContent = displayText10
    document.querySelector('.text-11').textContent = displayText11
    document.querySelector('.text-12').textContent = displayText12
    document.querySelector('.text-1').textContent = displayText1
    document.querySelector('.text-2').textContent = displayText2
    document.querySelector('.text-3').textContent = displayText3
    document.querySelector('.text-4').textContent = displayText4
    document.querySelector('.text-5').textContent = displayText5
}

document.querySelector('.btn-9').addEventListener('click', function(){
    var textArea9 = document.querySelector('.text-9').value;
    localStorage.setItem('textArea9',JSON.stringify(textArea9))
    
})

document.querySelector('.btn-10').addEventListener('click', function(){
    var textArea10 = document.querySelector('.text-10').value;
    localStorage.setItem('textArea10',JSON.stringify(textArea10))
    
})

document.querySelector('.btn-11').addEventListener('click', function(){
    var textArea11 = document.querySelector('.text-11').value;
    localStorage.setItem('textArea11',JSON.stringify(textArea11))
    
})

document.querySelector('.btn-12').addEventListener('click', function(){
    var textArea12 = document.querySelector('.text-12').value;
    localStorage.setItem('textArea12',JSON.stringify(textArea12))
    
})

document.querySelector('.btn-1').addEventListener('click', function(){
    var textArea1 = document.querySelector('.text-1').value;
    localStorage.setItem('textArea1',JSON.stringify(textArea1))
    
})

document.querySelector('.btn-2').addEventListener('click', function(){
    var textArea2 = document.querySelector('.text-2').value;
    localStorage.setItem('textArea2',JSON.stringify(textArea2))
    
})

document.querySelector('.btn-3').addEventListener('click', function(){
    var textArea3 = document.querySelector('.text-3').value;
    localStorage.setItem('textArea3',JSON.stringify(textArea3))
    
})

document.querySelector('.btn-4').addEventListener('click', function(){
    var textArea4 = document.querySelector('.text-4').value;
    localStorage.setItem('textArea4',JSON.stringify(textArea4))
    
})

document.querySelector('.btn-5').addEventListener('click', function(){
    var textArea5 = document.querySelector('.text-5').value;
    localStorage.setItem('textArea5',JSON.stringify(textArea5))
    
})
saveText()