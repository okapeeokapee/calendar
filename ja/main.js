'use strict';

console.clear(); 

{
  const year = 2020;
  const month = 4;//5月

  function getCalendarHead(){
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();
    for(let i = 0; i < n; i++){
      dates.unshift({
        date:d - i,
        isToday:false,
        isDisabled:true,
      });
    }

    console.log(dates);
  }

  function getCalendarBody(){
    const dates = [];
    const lastDates = new Date (year, month + 1, 0).getDate();

    for(let i = 1; i <= lastDates; i++){
      dates.push({
        date:i,
        isToday:false,
        isDisabled:false,
      });
    }
    console.log(dates);
  }
  getCalendarHead();
  // getCalendarBody();
}