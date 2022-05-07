function convertTZ(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}

function refreshTime() {
  //Get Select value
  const optionZone = document.getElementsByName("timeZone")[0];
  const selectTZone = optionZone.options[optionZone.selectedIndex].value;
  // Get the selected value the date and time
  const dayDisplay = document.getElementById("day");
  const timeDisplay = document.getElementById("time");
  const timezoneDisplay = document.getElementById("selectTZ");
  const dateString = new Date();
  const currentDate = convertTZ(dateString, selectTZone);
  let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    currentDate
  );
  let month = new Intl.DateTimeFormat("en", { month: "long" }).format(
    currentDate
  );
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
    currentDate
  );
  let week = new Intl.DateTimeFormat("en", { weekday: "long" }).format(
    currentDate
  );
  let hours = ("0"+(currentDate.getHours() % 12  || 12)).slice(-2)
  let mins = String(currentDate.getMinutes()).padStart(2, '0');
  let secs = String(currentDate.getSeconds()).padStart(2, '0');
  let ampm = currentDate.getHours() >= 12 ? "PM" : "AM";

  //Display Date and Time | Timezone
  timezoneDisplay.textContent =
    optionZone.options[optionZone.selectedIndex].text;
  dayDisplay.textContent = week + ", " + day + " " + month + " " + year;
  timeDisplay.textContent = hours + ":" + mins + ":" + secs + " " + ampm;
}

setInterval(refreshTime, 0);
