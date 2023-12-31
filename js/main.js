console.log("let's make a Weather App")
// High, Low, Forecast and Humidity
// need to access the nested keys inside 'main'for 'temp'
const getData = async ()=>{
    let response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=fc5f145739d13ca486f5e6fd587a490d&units=imperial') 
    console.log(response)
    console.log(response.data)
    return response.data
}

const createList = (name, temp, temp_min, temp_max, humidity, weatherDescription) =>{
    const html = `<div name=${name} class="card mt-3 mb-3 bg-light p-2 bg-opacity-10" style="width: 18rem; ">
    <ul class="list-group list-group-flush" name=${name}>

    <li class="list-group-item bg-secondary bg-gradient p-2 bg-opacity-25">${name}</li>
    <li class="list-group-item bg-secondary bg-gradient p-2 bg-opacity-25"> ${temp} °F temp</li>
    <li class="list-group-item bg-secondary bg-gradient p-2 bg-opacity-25"> ${temp_min} °F min</li>
    <li class="list-group-item bg-secondary bg-gradient p-2 bg-opacity-25"> ${temp_max} °F max</li>
    <li class="list-group-item bg-secondary bg-gradient p-2 bg-opacity-25"> ${humidity} % humidity</li>
    <li class="list-group-item bg-secondary bg-gradient p-2 bg-opacity-25"> forecast: ${weatherDescription} </li>
  
    </ul>
    </div>`;
    document.querySelector('.weather-list').insertAdjacentHTML('beforeend', html)
}
// weather
// : 
// Array(1)
// 0
// : 
// {id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d'}
// length
// : 
// 1
const loadData = async ()=> {
    const weatherData = await getData();
    const {name, main, weather} = weatherData;
    // this is an array from data so find index
    const weatherDescription = weather[0].description;
    createList(name, main.temp, main.temp_min, main.temp_max, main.humidity, weatherDescription)
}
    

const clearData = () => {
    document.querySelector('.weather-list').innerHTML = '';
}