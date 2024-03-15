
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const img = document.querySelector('img')
let time = ""


async function getWeather(name){

    try {
        const promesa =  await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b87bf8028f854a0c898145318241103&q=${name}&days=5`)
        const datos = await promesa.json()
        console.log(datos.current.temp_c )
        document.querySelector('img').src =  datos.current.condition.icon
        document.querySelector('.city').textContent = datos.location.name
        console.log(datos.current.temp_f)
        const span = document.createElement('span')
        span.setAttribute('id',"mySpan")
        span.textContent = " k"
        document.querySelector('.temp').textContent = datos.current.temp_c ;//+ " °<span class='celsius'>C</span>" + " | " + "<span class='kelvin'>K</span>";
        document.querySelector('.indices').innerHTML = " °<span class='celsius'>C</span>" + " | " + "<span class='kelvin'>K</span>"
       
        document.querySelector('.info').textContent =datos.current.condition.text

        console.log(datos.location.name)
        time =  new Date(datos.location.localtime)
        document.querySelector('.day').textContent = daysOfWeek[time.getDay()] + ", "+ time.getDate() + " "+months[time.getMonth()] + " "+time.getFullYear()+ " | "+time.toLocaleTimeString('en-US')
        console.log(datos)
    }   
    catch(error){
        console.log(error)
    }
}
getWeather("San javier")



document.querySelector('input').addEventListener('keyup',function(e){

    e.preventDefault();
    
    if(e.key ==  "Enter" || e.key == 13) {
        
        const name = document.querySelector('input').value

        getWeather(name)

    }

})







