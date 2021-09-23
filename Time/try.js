let months = ['Jenuary', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December']
let date = new Date();



let busMonthName;
let busDay = 15;
let busMonth = 3;
let busYear = 2028;
let busHours = 8;
let busMinutes = 0;
let busSecond = 0;
let moveImg2;

let BirthMonthName;
let BirthDay = 24;
let BirthMonth = 10;
let BirthYear = 2021;
let BirthHours = 0;
let BirthMinutes = 0;
let BirthSecond = 0;

let CarMonthName;
let CarDay = 25;
let CarMonth = 10;
let CarYear = 2024;
let CarHours = 15;
let CarMinutes = 0;
let CarSecond = 0;

let Birth18MonthName;
let Birth18Day = 24;
let Birth18Month = 10;
let Birth18Year = 2025;
let Birth18Hours = 0;
let Birth18Minutes = 0;
let Birth18Second = 0;

let day18 = 24;
let month18 = 10;
let year18 = 2025;
let hour18 = 0;
let minutes18 = 0;
let seconds18 = 0;

let dayMeet = 15;
let monthMeet = 4;
let yearMeet = 2018;
let hourMeet = 18;
let minutesMeet = 30;
let secondsMeet = 0;

let days31;



let busLeftDays, busLeftYears, busLeftMonths, busLeftHours, busLeftMinutes, busLeftSeconds;

let BirthLeftDays, BirthLeftYears, BirthLeftMonths, BirthLeftHours, BirthLeftMinutes, BirthLeftSeconds;
function checkDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes()
    let seconds = date.getSeconds();
    for (let i = 0; i < 12; i++) { 
        if (month == i) {
            busMonthName = months[i - 1]
        }
    }

    let clockArray = [hours, minutes, seconds, day];
    for (let j = 0; j < clockArray.length; j++) {
        if (clockArray[j] < 10) {
            clockArray[j] = '0' + clockArray[j];
        }
    }


    GoneYears = year - yearMeet;
    month - monthMeet < 0 ? GoneMonths = 12 - ((month - monthMeet) * -1) : GoneMonths = month - monthMeet; 
    day - dayMeet < 0 ? GoneDays = 30 - ((day - dayMeet) * -1)   : GoneDays = day - dayMeet;
    allMeetDays = GoneYears * 365 + Math.ceil(GoneMonths * 30.5) + GoneDays;
    hours - hourMeet < 0 ? GoneHours = 24 - ((hours - hourMeet) * -1)  : GoneHours = hours - hourMeet;
    minutes - minutesMeet < 0 ? GoneMinutes = 60 - ((minutes - minutesMeet) * -1) : GoneMinutes = minutes - minutesMeet; 
    seconds - secondsMeet < 0 ? GoneSeconds = 60 - ((seconds - secondsMeet) * -1) : GoneSeconds = seconds - secondsMeet;



    busLeftYears = (busYear - year) * 365;
    busLeftMonths = (busMonth - month) * 30 + Math.ceil((busMonth - month)/2) ;
    busLeftDays = busDay - day;
    busLeftHours = busHours - hours;
    busLeftMinutes = busMinutes - minutes;
    busLeftSeconds = busSecond - seconds;
    allBusDays = busLeftYears + busLeftMonths + busLeftDays;



    BirthLeftYears = (BirthYear - year) * 365;

    BirthMonth % 2 == 0 && month % 2 == 1 ? days31 = Math.floor((BirthMonth - month) / 2) : days31 = Math.ceil((BirthMonth - month) / 2) 

    if(BirthMonth % 2 == 1 && month % 2 == 1 || BirthMonth % 2 == 0 && month % 2 == 0  ) {
        days31 = Math.floor((BirthMonth - month) / 2)
     }

    BirthLeftMonths = (BirthMonth - month) * 30 + days31;
    BirthLeftDays = BirthDay - day;
    BirthLeftHours = BirthHours - hours;
    BirthLeftMinutes = BirthMinutes - minutes;
    BirthLeftSeconds = BirthSecond - seconds;

    allBirthDays = BirthLeftDays + BirthLeftMonths + BirthLeftYears;

    if(seconds >= BirthSecond) {
        BirthLeftSeconds = 60 + BirthLeftSeconds;
    }

    if(minutes>=BirthMinutes) {
        BirthLeftMinutes = 59 + BirthLeftMinutes;
    }

    if(hours>=BirthHours) {
        BirthLeftHours = 23 + BirthLeftHours;
        allBirthDays --
    }


    


    CarLeftYears = (CarYear - year) * 365;

    CarMonth % 2 == 0 && month % 2 == 1 ? days31 = Math.floor((CarMonth - month) / 2) : days31 = Math.ceil((CarMonth - month) / 2) 

    if(CarMonth % 2 == 1 && month % 2 == 1 || CarMonth % 2 == 0 && month % 2 == 0  ) {
        days31 = Math.floor((CarMonth - month) / 2)
     }

    CarLeftMonths = (CarMonth - month) * 30 + days31;
    CarLeftDays = CarDay - day;
    CarLeftHours = CarHours - hours;
    CarLeftMinutes = CarMinutes - minutes;
    CarLeftSeconds = CarSecond - seconds;

    allCarDays = CarLeftDays + CarLeftMonths + CarLeftYears;

    if(seconds >= CarSecond) {
        CarLeftSeconds = 60 + CarLeftSeconds;
    }

    if(minutes>=CarMinutes) {
        CarLeftMinutes = 59 + CarLeftMinutes;
    }

    if(hours>=CarHours) {
        CarLeftHours = 23 + CarLeftHours;
        allCarDays --
    }





    Birth18LeftYears = (Birth18Year - year) * 365;

    Birth18Month % 2 == 0 && month % 2 == 1 ? days31 = Math.floor((Birth18Month - month) / 2) : days31 = Math.ceil((Birth18Month - month) / 2) 

    if(Birth18Month % 2 == 1 && month % 2 == 1 || Birth18Month % 2 == 0 && month % 2 == 0  ) {
        days31 = Math.floor((Birth18Month - month) / 2)
     }

    Birth18LeftMonths = (Birth18Month - month) * 30 + days31;
    Birth18LeftDays = Birth18Day - day;
    Birth18LeftHours = Birth18Hours - hours;
    Birth18LeftMinutes = Birth18Minutes - minutes;
    Birth18LeftSeconds = Birth18Second - seconds;

    allBirth18Days = Birth18LeftDays + Birth18LeftMonths + Birth18LeftYears;

    if(seconds >= Birth18Second) {
        Birth18LeftSeconds = 60 + Birth18LeftSeconds;
    }

    if(minutes>=Birth18Minutes) {
        Birth18LeftMinutes = 59 + Birth18LeftMinutes;
    }

    if(hours>=Birth18Hours) {
        Birth18LeftHours = 23 + Birth18LeftHours;
        allBirth18Days --
    }


    



    if (busLeftSeconds < 0) {
        busLeftMinutes--;
        busLeftSeconds = 60 + busLeftSeconds;
    }
    if (busLeftMinutes < 0) {
        busLeftHours--;
        busLeftMinutes = 60 + busLeftMinutes;
    }
    if (busLeftHours < 0) {
        allBusDays--;
        busLeftHours = 23 + busLeftHours;
    }
    $('#today').html('<h2 id="date"><div>' + year + '</div><div>' + busMonthName + '</div><div>' + clockArray[3] + '</div></h2>' +
        '<h1 id="clock"><div>' + clockArray[0] + '</div><div>:</div><div>' + clockArray[1] + '</div><div>:</div><div>' + clockArray[2] + '</div></h1>')

    $('#Bus').html('<div id="busTime"><div style="color:darkred"><b><h3>' + allBusDays + '</h3></b></div><div>დღე</div><div style="color:darkred"><b><h3>' + busLeftHours + '</h3></b></div><div>საათი</div><div style="color:darkred"><b><h3>' + busLeftMinutes + '</h3></b></div><div>წუთი</div><div style="color:darkred"><b><h3>' + busLeftSeconds + '</h3></b></div><div>წამი</div>' + '</div>')
    
    $('#BDay').html('<div id="BirthDay"><div style="color:darkblue"><b><h3>' + allBirthDays + '</h3></b></div><div>დღე</div><div style="color:darkblue"><b><h3>' + BirthLeftHours + '</h3></b></div><div>საათი</div><div style="color:darkblue"><b><h3>' + BirthLeftMinutes + '</h3></b></div><div>წუთი</div><div style="color:darkblue"><b><h3>' + BirthLeftSeconds + '</h3></b></div><div>წამი</div>' + '</div>')
    
    $('#car').html('<div id="CarTime"><div style="color:ghostwhite"><b><h3>' + allCarDays + '</h3></b></div><div>დღე</div><div style="color:ghostwhite"><b><h3>' + CarLeftHours + '</h3></b></div><div>საათი</div><div style="color:ghostwhite"><b><h3>' + CarLeftMinutes + '</h3></b></div><div>წუთი</div><div style="color:ghostwhite"><b><h3>' + CarLeftSeconds + '</h3></b></div><div>წამი</div>' + '</div>')
    
    $('#birthDay18').html('<div id="Birth18Day"><div style="color:maroon"><b><h3>' + allBirth18Days + '</h3></b></div><div>დღე</div><div style="color:maroon"><b><h3>' + Birth18LeftHours + '</h3></b></div><div>საათი</div><div style="color:maroon"><b><h3>' + Birth18LeftMinutes + '</h3></b></div><div>წუთი</div><div style="color:maroon"><b><h3>' + Birth18LeftSeconds + '</h3></b></div><div>წამი</div>' + '</div>')
    
    $('#meet').html('<div id="meetDay"><div style="color:teal"><b><h3>' + allMeetDays + '</h3></b></div><div>დღე</div><div style="color:teal"><b><h3>' + GoneHours + '</h3></b></div><div>საათი</div><div style="color:teal"><b><h3>' + GoneMinutes + '</h3></b></div><div>წუთი</div><div style="color:teal"><b><h3>' + GoneSeconds + '</h3></b></div><div>წამი</div>' + '</div>')
    
    
    setTimeout(() => {
        checkDate();
    }, 1000);
 
}

checkDate();



let x = 1;


$('.next').on('click',function(){

    if (x==0) {
        $('#meet').slideUp(1000)
        $('#birth').slideDown(1000)
        $('#todayContainer').fadeOut(500)
        $('#todayContainer').fadeIn(1000)
        $('#today').css('background-color','lightcoral');
    }

    if (x==1) {
        $('#birth').slideUp(1000)
        $('#car').slideDown(1000)
        $('#todayContainer').fadeOut(500)
        $('#todayContainer').fadeIn(1000)
        $('#today').css('background-color','darkolivegreen');
    }

    if(x==2) {
        $('#car').slideUp(1000)
        $('#birth18').slideDown(1000)
        $('#todayContainer').fadeOut(500)
        $('#todayContainer').fadeIn(1000)
        $('#today').css('background-color','khaki');
    }

   

    if(x==3) {
        $('#birth18').slideUp(1000)
        $('#bus').slideDown(1000)
        $('#todayContainer').fadeOut(500)
        $('#busContainer').fadeIn(2000)
        $('#todayContainer').fadeIn(1000)
        $('#today').css('background-color','skyblue');
    }
    console.log(x)
    if(x!=5){
        x++
    }
})

$('.prev').on('click',function(){

    if(x==1){
        $('#birth').slideUp(1000)
        $('#meet').slideDown(1000)
        $('#todayContainer').fadeOut(500)
        $('#todayContainer').fadeIn(1000)
        $('#today').css('background-color','cornsilk');
   }

    if(x==2){
         $('#car').slideUp(1000)
         $('#birth').slideDown(1000)
         $('#todayContainer').fadeOut(500)
         $('#todayContainer').fadeIn(1000)
         $('#today').css('background-color','lightcoral');
    }

    if(x==3) {
        $('#birth18').slideUp(1000)
        $('#car').slideDown(1000)
        $('#todayContainer').fadeOut(500)
        $('#todayContainer').fadeIn(1000)
        $('#today').css('background-color','darkolivegreen');
    }

    if(x==4) {
        $('#birth18').slideDown(1000)
        $('#bus').slideUp(1000)
        $('#todayContainer').fadeOut(500)
        $('#todayContainer').fadeIn(1000)
        $('#today').css('background-color','khaki');
    }

    console.log(x)
    if(x!=0){
        x--
    }
    
})
