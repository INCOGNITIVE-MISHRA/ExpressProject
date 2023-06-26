// // Retrieve the necessary HTML elements
// const cityNameInput = document.getElementById("cityName");
// const submitBtn = document.getElementById("submitBtn");
// const city = document.getElementById("city_name");
// const temperature = document.getElementById("temp");
// const tempStatus = document.getElementById("temp_status");

// // Function to fetch the weather data for the entered city
// const fetchWeatherData = async () => {
//     const cityName = cityNameInput.value.trim();

//     // Check if the city name is empty
//     if (cityName === "") {
//         alert("Please enter a city name");
//         return;
//     }

//     try {
//         // Make the API call to fetch weather data
//         const API_KEY = "ee919d1a1c7dc536816a5cf896373c51";
//         const API_ENDPOINT_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

//         const response = await fetch(API_ENDPOINT_URL); // Replace API_ENDPOINT_URL with the actual API endpoint URL

//         if (!response.ok) {
//             throw new Error("Unable to fetch weather data");
//         }

//         const data = await response.json();

//         // Update the UI with the fetched data
//         city.textContent = data.city;
//         temperature.querySelector("span").textContent = data.temperature;
//         tempStatus.textContent = data.weatherStatus;

//         // Show the weather information
//         document.querySelector(".data_hide").classList.remove("data_hide");
//     } catch (error) {
//         console.error(error);
//         alert("An error occurred while fetching weather data");
//     }
// };

// // Event listener for form submission
// submitBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     fetchWeatherData();
// });





const cityName = document.getElementById('cityName')

const submitBtn= document.getElementById('submitBtn');

const city_name = document.getElementById("city_name");

const temp_real_val = document.getElementById("temp_real_val");
const temp_Status = document.getElementById("temp_status");

const datahide = document.querySelector('.middle_layer')



const getInfo = async (event) =>{
    event.preventDefault();
    let cityVal = cityName.value;

     if(cityVal===""){
    city_name.innerText = `please write the name before search`;
    datahide.classList.add('data_hide');
     }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ee919d1a1c7dc536816a5cf896373c51`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText= arrData[0].main.temp;
           // temp_Status.innerText=arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;




            if(tempMood=="Clear"){
                temp_Status.innerHTML=
                "<i class='fas fa-sun' style = 'color: #eccc68;'></i>";
            } else if(tempMood=="Clouds"){
                temp_Status.innerHTML=
                "<i class='fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }
            else if(tempMood=="Rain"){
                temp_Status.innerHTML=
                "<i class='fa-solid fa-cloud-rain' style = 'color: #a4b0be;'></i>";
            }
            else{
                temp_Status.innerHTML=
                "<i class='fa-solid fa-sun' style = 'color: #eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `please enter the city name properly`;
            datahide.classList.add('data_hide');
        }


    }
}

submitBtn.addEventListener('click', getInfo)