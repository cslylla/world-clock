function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Mo, YYYY");
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Mo, YYYY");
    parisTimeElement.innerHTML = parisTime.format(
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
    let city = timeZone.replace("_", " ").split("/")[1];
    let cityDateTime = moment.tz(timeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${city}</h2>
                <div class="date">${cityDateTime.format("MMMM Mo, YYYY")}</div>
            </div>
            <div class="time">${cityDateTime.format(
              "h:mm:ss"
            )}<small>${cityDateTime.format("A")}</small></div>
        </div>
    `;
  }
}

citySelectorElement.addEventListener("change", updateCity);
