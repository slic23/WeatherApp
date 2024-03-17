import './style.css';

// Factory function para crear objetos con datos del clima

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const img = document.querySelector('img')
let time = ""


function WeatherData(kelvin, celsius, feelslike_c, feelslike_f) {
    return {
        kelvin,
        celsius,
        feelslike_c,
        feelslike_f
    };
}

// Factory function para crear objetos de día
function DayData(day, icono, min, max, text) {
    return {
        day,
        icono,
        min,
        max,
        text
    };
}

// Factory function para crear objetos de configuración de opciones
function OptionConfig(target, celsius, kelvin) {
    return {
        target,
        celsius,
        kelvin
    };
}

// Función para manejar el cambio de temperatura
function changeTemp(event, tempData) {
    if (event.target.textContent === '°C') {
        document.querySelector('.temp').textContent = tempData.celsius;
        document.querySelector('.feels').textContent = tempData.feelslike_c + "°C";
        event.target.style.color = "black";
        document.querySelector('.kelvin').style.color = "grey";
    } else if (event.target.textContent === 'K') {
        document.querySelector('.feels').textContent = tempData.feelslike_f + "K";
        document.querySelector('.temp').textContent = tempData.kelvin;
        event.target.style.color = 'black';
        document.querySelector('.celsius').style.color = "grey";
    }
}

// Función para configurar eventos después de obtener el clima
function afterCall(tempData) {
    document.querySelectorAll('.celsius, .kelvin').forEach(option => {
        option.addEventListener('click', (event) => {
            changeTemp(event, tempData);
        });
    });
}

// Función para obtener datos del clima
async function getWeather(name) {
    try {
        document.querySelector('input').value = "";
        const promesa = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b87bf8028f854a0c898145318241103&q=${name}&days=5`, {mode: 'cors'});
        const datos = await promesa.json();
        const tempData = WeatherData(datos.current.temp_f, datos.current.temp_c, datos.current.feelslike_c, datos.current.feelslike_f);
        document.querySelector('.feels').textContent = tempData.feelslike_c + "°C";
        days(datos.forecast.forecastday);
        document.querySelector('.humidity').textContent = datos.current.humidity + "%";
        document.querySelector('.wind').textContent = datos.current.wind_kph + " km/h";
        document.querySelector('img').src = datos.current.condition.icon;
        document.querySelector('.city').textContent = datos.location.name;
        document.querySelector('.temp').textContent = datos.current.temp_c;
        document.querySelector('.indices').innerHTML = "<span id='opt' class='celsius'>°C</span> | <span id='opt' class='kelvin'>K</span>";
        document.querySelector('.info').textContent = datos.current.condition.text;
        time = new Date(datos.location.localtime);
        document.querySelector('.day').textContent = daysOfWeek[time.getDay()] + ", " + time.getDate() + " " + months[time.getMonth()] + " " + time.getFullYear() + " | " + time.toLocaleTimeString('en-US');
        afterCall(tempData);
    } catch (error) {
        console.log(error);
    }
}

// Función para eliminar todos los nodos secundarios de un elemento
function deleteChildNodes(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

// Función para procesar los datos de los días
function days(arrai) {
    deleteChildNodes(document.querySelector('.raiz'));
    for (let i = 0; i < arrai.length; i++) {
        const day = daysOfWeek[new Date(arrai[i].date).getDay()];
        const icono = arrai[i].day.condition.icon;
        const min = arrai[i].day.mintemp_c;
        const max = arrai[i].day.maxtemp_c;
        const text = arrai[i].day.condition.text;
        const dayData = DayData(day, icono, min, max, text);
        makingCart(dayData);
    }
}

// Función para crear los elementos de visualización de los días
function makingCart(dayData) {
    const daymore = document.createElement('div');
    document.querySelector('.raiz').append(daymore);
    daymore.setAttribute('class', 'daymore');

    const oneDay = document.createElement('div');
    daymore.append(oneDay);
    oneDay.textContent = dayData.day;

    const divIcono = document.createElement('div');
    daymore.append(divIcono);
    const img = document.createElement('img');
    img.src = dayData.icono;
    img.setAttribute('id', "imagenDia");
    divIcono.append(img);

    const temp = document.createElement('div');
    daymore.append(temp);
    temp.textContent = `${dayData.max}°C-${dayData.min}°C`;

    const texto = document.createElement('div');
    daymore.append(texto);
    texto.textContent = dayData.text;
}

// Event listener para obtener el clima cuando se presiona Enter en el input
document.querySelector('input').addEventListener('keyup', function (e) {
    e.preventDefault();
    if (e.key == "Enter" || e.key == 13) {
        const name = document.querySelector('input').value;
        getWeather(name);
    }
});

// Configuración inicial del clima
getWeather("San javier");
