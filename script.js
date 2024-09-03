const result = document.getElementById('result');
const searchBtn = document.getElementById('search-btn');
const cityRef = document.getElementById('city');

const getWeather = () => {
    const city = cityRef.value;
    if(city.length === 0){
        result.innerHTML = `<h3 class="mt-6 uppercase font-bold tracking-widest">Tuliskan nama kota, kabupaten, kecamatan, desa</h3>`;
    }else{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fcd445ba2eca3bfa2cf9c032002101d&units=metric`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                result.innerHTML = `
                <h2 class="text-2xl font-semibold my-6 uppercase tracking-widest">${data.name}</h2>
                <div class="space-y-2">
                    <p class="uppercase tracking-wider text-sm">${data.weather[0].main}</p>
                    <p class="uppercase tracking-wider text-sm">${data.weather[0].description}</p>
                </div>
                <div class="flex justify-center h-14 my-4">
                    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" width="70" height="70">
                </div>
                <h1 class="text-6xl font-medium mb-2">${data.main.temp} &#176</h1>
                <div class="flex justify-center divide-x-2 divide-trans-white-1">
                    <div class="py-2 px-4">
                        <h4 class="font-medium">min</h4>
                        <p class="font-light">${data.main.temp_min} &#176</p>
                    </div>
                    <div class="py-2 px-4">
                        <h4 class="font-medium">max</h4>
                        <p class="font-light">${data.main.temp_max} &#176</p>
                    </div>
                </div>
                <div class="mt-3">
                    <h4 class="font-medium">Terasa Seperti</h4>
                    <p class="font-light">${data.main.feels_like} &#176</p>
                </div>`
            })
            .catch(() => {
                result.innerHTML = `<h3 class="mt-6 uppercase font-bold tracking-widest">maaf, yang anda cari7 tidak ditemukan 😢</h3>`
            })

    }
}

window.addEventListener('load', getWeather);
searchBtn.addEventListener('click', getWeather)
cityRef.addEventListener('keypress',(e) => {
    if(e.key === "Enter"){
        searchBtn.click();
    }
})