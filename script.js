let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let desc = document.querySelector("#desc");
let cityName = document.querySelector("#name");

const form = document.querySelector("#form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  // console.log("submit successfully");
  const city = document.getElementById("city").value;
  const response = await fetch(
    `https://goweather.herokuapp.com/weather/${city}`
  );
  const data = await response.json();
  // console.log(data);
  cityName.innerHTML = city;
  temp.innerHTML = data.temperature;
  wind.innerHTML = data.wind;
  desc.innerHTML = data.description;
  form.reset();
});
