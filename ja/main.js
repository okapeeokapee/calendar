'use strict';{
  const year = 2020;
  const month = 4;

  function getCalendarBody(){
    const dates = [];
    const lastDates = new Date (year, month + 1, 0).getDate();

    for(let i = 1; i <= lastDates; i++){
      dates.push(i);
    }
    console.log(dates);
  }
  getCalendarBody();
}