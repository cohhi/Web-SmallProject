
function weather(data){
    var dateDayname = document.getElementById("date-dayname");
    var dateDay = document.getElementById("date-day");
    var location = document.getElementById("location");
    //天气图标
    var weahterL = document.getElementById("weather-l");
    var weatherTemp = document.getElementById("weather-temp");
    var weatherDesc = document.getElementById("weather-desc");

    dateDayname.innerHTML = data.weather[0].date.slice(0,3);
    dateDay.innerHTML = data.date;
    location.innerHTML = data.city;

    //这个图标等下封装一个函数，来判断用什么图标
    weahterL.innerHTML = weatherIcon(1);
    weatherTemp.innerHTML = data.weather[0].temp.slice(0,3) + "℃";
    weatherDesc.innerHTML = data.weather[0].weather;

    var pm = document.getElementById("pm");
    var humidity = document.getElementById("humidity")
    var wind = document.getElementById("wind");

    pm.innerHTML = data.pm25;
    humidity.innerHTML = "暂无";
    wind.innerHTML = data.weather[0].wind;

    var day1 = document.getElementById("day1");
    var span1 = day1.getElementsByTagName("span");

    var day2 = document.getElementById("day2");
    var span2 = day2.getElementsByTagName("span");

    var day3 = document.getElementById("day3");
    var span3 = day3.getElementsByTagName("span");

    var day4 = document.getElementById("day4");
    var span4 = day4.getElementsByTagName("span");

    span1[0].innerHTML = weatherIcon(1);
    span1[1].innerHTML = data.weather[0].date.slice(0,3);
    span1[2].innerHTML = data.weather[0].temp;

    span2[0].innerHTML = weatherIcon(2);
    span2[1].innerHTML = data.weather[1].date.slice(0,3);
    span2[2].innerHTML = data.weather[1].temp;

    span3[0].innerHTML = weatherIcon(3);
    span3[1].innerHTML = data.weather[2].date.slice(0,3);
    span3[2].innerHTML = data.weather[2].temp;

    span4[0].innerHTML = weatherIcon(4);
    span4[1].innerHTML = data.weather[3].date.slice(0,3);
    span4[2].innerHTML = data.weather[3].temp;
    //封装一个判断天气，选择图标的函数
    //参数t为第t天
    function weatherIcon(t){
        if(data.weather[t - 1].icon1.search("yin") != -1){
            return "&#xe624;";
        }
        if(data.weather[t - 1].icon1.search("duoyun") != -1){
            return "&#xe618;";
        }
        if(data.weather[t - 1].icon1.search("qing") != -1){
            return "&#xe61f;";
        }
        if(data.weather[t - 1].icon1.search("xiaoyu") != -1){
            return "&#xe622;";
        }
        if(data.weather[t - 1].icon1.search("zhongyu") != -1){
            return "&#xe685;";
        }
        if(data.weather[t - 1].icon1.search("dayu") != -1 || data.weather[0].icon1.search("baoyu") != -1){
            return "&#xe644;";
        }
        if(data.weather[t - 1].icon1.search("zhenyu") != -1){
            return "&#xe642;";
        }
    }

}


window.onload = function(){

    let btn = document.getElementById("location-button");
    let city = document.getElementById("city");

    //默认查询北京天气
    let script = document.createElement("script");
            script.src = `https://api.asilu.com/weather/?city=${"咸阳"}&callback=weather`;
            document.body.appendChild(script);
}