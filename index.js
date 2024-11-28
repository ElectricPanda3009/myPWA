const dates = document.getElementById('dates');
const monthYear = document.getElementById('monthYear');

let year = new Date().getFullYear();
let month = new Date().getMonth();

updateCalandar();

function prevMonth() {
    
    if (month === 0) {
        month = 11;
        year--;
    } else {
    month--;
    }

    updateCalandar();
}

function nextMonth() {
    
    if (month === 11) {
        month = 0;
        year++;
    } else {
    month++;
    }

    updateCalandar();
}

function updateCalandar() {

    const firstDayMonthWkDay = new Date(year, month, 1).getDay();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let monthLength;
    
    switch(month) {
        case 0:
            monthLength = 31;
            break;
        case 1:
            monthLength = year % 4 === 0 ? 29 : 28;
            break;
        case 2:
            monthLength = 31;
            break;
        case 3:
            monthLength = 30;
            break;
        case 4:
            monthLength = 31;
            break;
        case 5:
            monthLength = 30;
            break;
        case 6:
            monthLength = 31;
            break;
        case 7:
            monthLength = 31;
            break;
        case 8:
            monthLength = 30;
            break;
        case 9:
            monthLength = 31;
            break;
        case 10:
            monthLength = 30;
            break;
        case 11:
            monthLength = 31;
            break;
    }

    dates.innerHTML = '';

    for (i = 0; i < firstDayMonthWkDay; i++) {
        dates.innerHTML += `<div class="dateBlank"></div>`;
        console.log('blank');
    }

    for (i = 1; i <= monthLength; i++) {
        dates.innerHTML += `<div id="${i}" class="date">
                                <p class="dateText">${i}</p>
                             </div>`;
        console.log(i);
    }

    monthYear.textContent = `${monthNames[month]} ${year}`;

}