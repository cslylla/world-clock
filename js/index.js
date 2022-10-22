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

function updateCity(event) {
  if (event.target.value.length > 0) {
    let timeZone = event.target.value;
    if (event.target.value === "current") {
      timeZone = moment.tz.guess();
    }
    let city = timeZone.replace("_", " ").split("/")[1];
    let cityDateTime = moment.tz(timeZone);
    let newCityElement = document.querySelector("#new-city");
    newCityElement.innerHTML = `
            <div>
                <h2>${city}</h2>
                <div class="date">${cityDateTime.format(
                  "dddd, MMMM Mo, YYYY"
                )}</div>
            </div>
            <div class="time">${cityDateTime.format(
              "h:mm:ss"
            )}<small>${cityDateTime.format("A")}</small></div>
    `;
    newCityElement.classList.add("city");
  }
}

citySelectorElement.addEventListener("change", updateCity);
