const searchInput = document.querySelector("#searchInput");
const currentDay = document.querySelector("#currentDay");
const currentDayNumWithMonth = document.querySelector(
  "#currentDayNumWithMonth"
);
const currentLocation = document.querySelector("#currentLocation");
const currentDegree = document.querySelector("#currentDegree");
const currentDegreeIcon = document.querySelector("#currentDegreeIcon");
const currentStatus = document.querySelector("#currentStatus");
const loader = document.querySelector(".loader");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

searchInput.addEventListener("keyup", function () {
  if (searchInput.value !== "") {
    getWeather(searchInput.value);
  }
});

let getWeather = async (query) => {
  try {
    loader.style.display = "flex";
    let res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=c0f82aea9b7f4bfd951234200240812&q=${query}&days=3`
    );
    let data = await res.json();
    loader.style.display = "none";
    displayData(data);
  } catch (error) {
    console.log("Enter Valid Location");
  }
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      geoLocation = `${position.coords.latitude},${position.coords.longitude}`;
      getWeather(`${geoLocation}`);
    },
    (error) => {
      getWeather("cairo");
      console.log(error);
    }
  );
}

let displayData = (data) => {
  let forecastDays = data.forecast.forecastday;
  let currentDayDate = new Date(forecastDays[0].date);

  currentDay.textContent = days[currentDayDate.getDay()];
  currentDayNumWithMonth.textContent = `${currentDayDate.getDate()} ${
    months[currentDayDate.getMonth()]
  }`;
  currentLocation.textContent = data.location.name;
  currentDegree.innerHTML = `${data.current.temp_c}<sup>o</sup>C`;
  currentDegreeIcon.innerHTML = `
    <img
    src="${data.current.condition.icon}"
    alt="${data.current.condition.text} icon"
    />
  `;
  currentStatus.textContent = data.current.condition.text;

  displayRestOfDays(forecastDays);
};

let displayRestOfDays = (data) => {
  let container = "";
  for (let i = 1; i < data.length; i++) {
    container += `
      <div class="col-lg-6">
        <div class="inner h-100 d-flex flex-column ${
          i % 2 === 0 ? "bg-primary-color" : "bg-secondary-color"
        }">
          <div
            class="inner-header text-center py-2 px-3 text-14 text-color ${
              i % 2 === 0 ? "bg-primary-color-alt" : "bg-secondary-color-alt"
            }"
          >
            <span>${days[new Date(data[i].date).getDay()]}</span>
          </div>
          <div
            class="inner-body flex-grow-1 flex-center flex-column text-center p-4"
          >
            <div class="icon-box mb-2">
              <img
                src="${data[i].day.condition.icon}"
                alt="${data[i].day.condition.text}"
              />
            </div>
            <div class="inner-body-info">
              <h3 class="text-24 fw-bold">${
                data[i].day.maxtemp_c
              }<sup>o</sup>C</h3>
              <span class="fs-6 text-color d-block">${
                data[i].day.mintemp_c
              }<sup>o</sup></span>
            </div>
            <span
              class="text-main-color text-capitalize text-14 d-block mt-3"
              >${data[i].day.condition.text}</span
            >
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById("restOfDays").innerHTML = container;
};
