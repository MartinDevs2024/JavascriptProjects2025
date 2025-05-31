function myTime(){
    //Create the var
    const time = new Date();
    let hour = time.getHours(),ampm;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const week = time.getDay();
    const month = time.getMonth();
    const year = time.getFullYear();

    //UI Elements
    let thour = document.getElementById('hour');
    let tminutes = document.getElementById('minutes');
    let tseconds = document.getElementById('seconds');
    let tampm = document.getElementById('ampm');
    let tyear = document.getElementById('year');
    let tmonth = document.getElementById('month');
    let tweek = document.getElementById('week');

    let months = ['January','Febreary','March','April','May','June','July','August','September','October','November','December'];
    let weeks = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

     if(hour >=12){
         hour = hour - 12;
         ampm = 'pm';
     }else{
         ampm = 'am';
     }
    
    //input the text
    thour.textContent = hour;
    tminutes.textContent = minutes;
    tseconds.textContent = seconds;
    tampm.textContent = ampm;
    tyear.textContent = year;
    tweek.textContent = weeks[week];
    tmonth.textContent = months[month];
}

setInterval(myTime,1000);