//Display city times with seconds
function updateTime() {
  //Locale
  let localElement = document.querySelector("#local");
  if (localElement) {
    let localDateElement = localElement.querySelector(".date");
    let localTimeElement = localElement.querySelector(".time");
    let timeZone = moment.tz.guess();
    let cityName = timeZone.replace("_", " ").split("/")[1];
    let cityNameElement = localElement.querySelector(".cityName");

    cityNameElement.innerHTML = cityName;
    localDateElement.innerHTML = moment()
      .tz(timeZone)
      .format("dddd, MMMM Mo, YYYY");
    localTimeElement.innerHTML = moment()
      .tz(timeZone)
      .format("h:mm:ss [<small>]A[</small>]");
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM Mo, YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Mo, YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

//City Selector
let citySelectorElement = document.querySelector("#citySelector");
function getImage() {
  let images = [
    "/src/clock_image_0.svg",
    "/src/clock_image_1.svg",
    "/src/clock_image_2.svg",
    "/src/clock_image_3.svg",
    "/src/clock_image_4.svg",
    "/src/clock_image_5.svg",
  ];
  let randomNumber = Math.floor(Math.random() * 6);
  return images[randomNumber];
}

function updateCity(event) {
  if (event.target.value.length > 0) {
    let timeZone = event.target.value;
    if (event.target.value === "current") {
      timeZone = moment.tz.guess();
    }
    let city = timeZone.replace("_", " ").split("/")[1];
    let cityDateTime = moment.tz(timeZone);
    let newCityElement = document.querySelector("#cities");
    newCityElement.innerHTML = `
      <div class="cities" id="cities">
          <div class="new-city">
                <div>
                    <h2 class="cityName">${city}</h2>
                    <div class="date">${cityDateTime.format(
                      "dddd, MMMM Mo, YYYY"
                    )}</div>
                </div>
                <div class="time">${cityDateTime.format(
                  "h:mm"
                )}<small>${cityDateTime.format("A")}</small></div>
          
      </div>
      <img src="${getImage()}" alt="Clock drawing" class="clock-image">
    `;
  }
}

citySelectorElement.addEventListener("change", updateCity);

//Theme change
let themeButtonElement = document.querySelector("#theme-button");
let main = document.querySelector("main");

function changeTheme() {
  if (main.classList.contains("dark")) {
    main.classList.remove("dark");
    themeButtonElement.innerHTML = `<span class="material-symbols-outlined">
dark_mode
</span>`;
  } else {
    main.classList.add("dark");
    themeButtonElement.innerHTML = `<span class="material-symbols-outlined">
            light_mode
        </span>`;
  }
}

themeButtonElement.addEventListener("click", changeTheme);
