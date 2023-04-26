//Function for digital clock's TIME display.
function time() {
  
  const realTime = new Date();

  const hour = formatHour(realTime.getHours())
  const minute = formatMinute(realTime.getMinutes())
  const second = formatSecond(realTime.getSeconds())
  const period = formatPeriod(realTime.getHours())

  const timeDisplay = hour + ':' + minute + ':' + second + period

  document.getElementById('timeContainer').innerHTML = timeDisplay;
}


  //functions used to format the TIME display.
      //formats hour to include leading zeros (ex. 04:06:08 AM)
      function formatHour(localHour) {
        if (localHour === 0) {
          return 12;
        } else if (localHour > 12) {
          return localHour - 12;
        } else return '0' + localHour;
      }


      //formats minutes to include leading zeros (ex. 04:06:08 AM)
      function formatMinute(localMinute) {
        return (localMinute < 10) ? '0' + localMinute : localMinute;
      }


      //formats seconds to include leading zeros (ex. 04:06:08 AM)
      function formatSecond(localSecond) {
        return (localSecond < 10) ? '0' + localSecond : localSecond;
      }


      //adds AM/PM to time display (ex. 04:06:08 AM)
      function formatPeriod(localHour) {
          return (localHour < 12) ? ' AM' : ' PM';
        }



//Function for digital clock's DATE display.
function date() {
  const realTime = new Date();

  const weekday = formatDay(realTime.getDay());
  const month = formatMonth(realTime.getMonth());
  const date = formatDate(realTime.getDate());
  const year = realTime.getFullYear();

  const dateDisplay = weekday + ', ' + month + ' ' + date + ' ' + year

  document.getElementById('dateContainer').innerHTML = dateDisplay;
}



  //functions used to format the digital clock's DATE display.
      //formats day to full weekday name (ex. Monday)
      function formatDay(localDay) {
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ];
        return days[localDay];
      }


      //formats month to full month name (ex. January)
      function formatMonth(localMonth) {
        const months = [
          "January",
          "Febuary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        return months[localMonth];
      }


      //formats date to include suffixs (ex. 1st, 2nd, 3rd, 4th...)
      function formatDate(localDate) {
        if (localDate === 1 || 21 || 31 ) {
          return localDate + "st";
        } else if (localDate === 2 || 22) {
          return localDate + "nd";
        } else if (localDate === 3 || 23) {
          return localDate + "rd";
        } else return localDate + "th";
      }


setInterval(time, 100)
time();
setInterval(date,100)
date();
