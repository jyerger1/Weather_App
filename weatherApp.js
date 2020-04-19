





// var moment = require('moment');
// moment().format();

// var time = moment();
// console.log(time.format('h:mm:ss a'))

// setInterval(function(){
//     var time = new Moment();
//     console.log(time.format('h:mm:ss a'));
// }, 3000)


var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');



button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=98714695d6d6eca2461e95c2aa78b140')
    .then(response => response.json())
    .then(data => console.log(data))
    // .then(data => {
    //     var nameValue = data['name'];
    //     var tempValue = data['main']['temp'];
    //     var descValue = data['weather'][0]['description'];

    //     name.innerHTML = nameValue;
    //     temp.innerHTML = tempValue;
    //     desc.innerHTML = descValue;
    // })

    

.catch(err => alert("wrong city name!"))
})


