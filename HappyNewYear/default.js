let times=setInterval(function (){
    let result=new Date();
    let TimesYear=result.getFullYear();
    let TimesMonth=result.getMonth()+1;
    let TimesData=result.getDate();
    let TimesHour=result.getHours();
    let TimesMinute=result.getMinutes();
    let TimesSecond=result.getSeconds();
    let TimeMessage=TimesYear+"年"+TimesMonth+"月"+TimesData+"日"+TimesHour+":"+TimesMinute+" "+TimesSecond;
    // console.log(TimeMessage)
    let year=document.getElementById("year")
    let month=document.getElementById("month")
    let day=document.getElementById("day")
    let hour=document.getElementById("hour")
    let minute=document.getElementById("minute")
    let second=document.getElementById("second")
    year.innerHTML=TimesYear
    month.innerHTML=TimesMonth
    day.innerHTML=TimesData
    hour.innerHTML=TimesHour
    minute.innerHTML=TimesMinute
    second.innerHTML=TimesSecond
    if(TimesYear===2023){

    }
},1000)



