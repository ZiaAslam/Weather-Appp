var minTemp = [];
var max_temp = [];
var icon_image = [];

function GetInfo() {
    var newName = document.getElementById("CityInput").value;
    var cityName = document.getElementById("CityName");
    cityName.innerHTML = newName;
    document.getElementById("para").innerHTML = "";

    fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${newName}&units=metric&appid=c73aa228bfba692462f96e89080aa39a`
    )
        .then((response) => response.json())
        .then((data) => {
            for (i = 0; i < 5; i++) {
                // for min temp
                minTemp[i] =
                    "" +
                    Number(data.list[i].main.temp_min, 31.85).toFixed(1) +
                    "°";
                document.getElementById("day" + (i + 1) + "Min").innerHTML =
                    minTemp[i];
                //   for max temp
                max_temp[i] =
                    "" +
                    Number(data.list[i].main.temp_max, 36.26).toFixed(1) +
                    "°";
                document.getElementById("day" + (i + 1) + "Max").innerHTML =
                    max_temp[i];
                //    for icon
                icon_image[i] =
                    "http://openweathermap.org/img/wn/" +
                    data.list[i].weather[0].icon +
                    ".png";

                document.getElementById("img" + (i + 1)).src = icon_image[i];
                //    for pressure
                document.getElementById("pressure").innerHTML =
                    "pressure :" + data.list[i].main.pressure + " " + "hPa";
                // for humidity
                document.getElementById("humidity").innerHTML =
                    "Humidity :" + data.list[i].main.humidity + " " + "%";
                //  for wind
                document.getElementById("wind").innerHTML =
                    "wind speed :" + data.list[i].wind.speed + " " + "m/s";

                this.checkDay();
                {
                    document.getElementById("day" + (i + 1)).innerHTML =
                        weekday[checkDay(i)];
                }
            }
        })
        .catch((err) => {
            document.getElementById("para").innerHTML = "something went wrong";
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "";
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "";
                document.getElementById("img" + (i + 1)).src = "";
                //    for pressure
                document.getElementById("pressure").innerHTML = "";
                document.getElementById("humidity").innerHTML = "";
                //  for wind
                document.getElementById("wind").innerHTML = "";
                document.getElementById("day" + (i + 1)).innerHTML = "";
               
                document.getElementById("try1").innerHTML = ""
                document.getElementById("icn-img").src = ""
            }
        });
}
function GetTemp(a) {
    document.getElementById("try1").innerHTML = minTemp[a];
    document.getElementById("icn-img").src = icon_image[a];
    // console.log("press");
    // document.getElementById("try1").innerHTML = item;
}

const d = new Date();
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
function checkDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    } else {
        return day + d.getDay();
    }
    // }
    // for (i = 0; i < 5; i++) {
    //     document.getElementById("day" + (i + 1)).innerHTML = weekday[checkDay(i)];
}
