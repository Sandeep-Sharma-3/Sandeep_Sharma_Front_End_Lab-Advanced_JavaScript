const cityWeathers = [
    {
        id : 1,
        city : "Bangalore",
        weather : "Rainy",
        temperature : 25
    },
    {
        id : 2,
        city : "Indore",
        weather : "Sunny",
        temperature : 30
    },
    {
        id : 3,
        city : "Aligarh",
        weather : "Sunny",
        temperature : 30
    },
    {
        id : 4,
        city : "Srinagar",
        weather : "Snowy",
        temperature : -5
    },
    {
        id : 5,
        city : "Chennai",
        weather : "Stormy",
        temperature : 20
    },
    {
        id : 6,
        city : "Mumbai",
        weather : "Windy",
        temperature : 15
    },
    {
        id : 7,
        city : "Delhi",
        weather : "Cloudy",
        temperature : 18
    },
    {
        id : 8,
        city : "Kanpur",
        weather : "Stormy",
        temperature : 27
    },
    {
        id : 9,
        city : "Kharagpur",
        weather : "Windy",
        temperature : 29
    }
];

function citySelected() {
    let city = document.getElementById('selectCity').value;
    let cityWeather = cityWeathers.find(item => item.city == city);
    document.getElementById('weatherTextName').innerText = cityWeather.weather;
    document.getElementById('weatherTextTemp').innerText = cityWeather.temperature + ' ' + '\xB0' + 'C';
    document.getElementById('weatherImg').setAttribute("src", "Images/Weather/" + cityWeather.weather.toLowerCase() + "2.jpg");
}

function addEventListeners() {
    document.getElementById('selectCity').addEventListener('change', citySelected);
}

function addOptions() {
    let selectCityTag = document.getElementById('selectCity');
    for(let i = 0; i < cityWeathers.length; ++i) {
        let option = document.createElement('option');
        option.innerHTML = option.value = cityWeathers[i].city;
        selectCityTag.appendChild(option);
    }
}

window.onload = function() {
    addEventListeners();
    let city = document.getElementById('selectCity').value; 
    if(city=="not_selected") {
        document.getElementById('weatherTextName').innerText = "Select City from city menu.";
        document.getElementById('weatherTextTemp').innerText = "Select City from city menu.";
        document.getElementById('weatherImg').setAttribute("alt", "Select City from city menu.");
    }

    addOptions();
};