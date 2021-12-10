
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

var display = document.querySelector('.display');

setInterval(() => {
    display.classList.toggle('nameValue','tempValue' , 'descVlaue');
} , 3000);


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+
        '&appid=77abc29af7c70f73010035f963b0c520&units')

        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
        })

        .catch(err => alert("Wrong city name!"))
})
