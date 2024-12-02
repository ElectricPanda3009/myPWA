const dates = document.getElementById("dates");
const monthYear = document.getElementById("monthYear");
const openAddEventModalButtons = document.querySelectorAll("[data-add-event-modal-target]");
const closeAddEventModalButtons = document.querySelectorAll("[data-close-add-event-modal]");
const openModifyEventsModalButtons = document.querySelectorAll("[data-modify-events-modal-target]");
const closeModifyEventsModalButtons = document.querySelectorAll("[data-close-modify-events-modal]");
const overlay = document.getElementById("overlay");
const addEventInputs = [document.getElementById("addEventName"),
                        document.getElementById("addEventTime"),
                        document.getElementById("addEventLocation")];

let year = new Date().getFullYear();
let month = new Date().getMonth();
let selectedDate = null;

let selectedDay = null;

openAddEventModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.addEventModalTarget);
        openModal(modal, "add");
    })
});

closeAddEventModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        let modal = button.closest(".addEventModal");
        closeModal(modal);
    })
});

openModifyEventsModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modifyEventsModalTarget);
        openModal(modal, "modify");
    })
});

closeModifyEventsModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        let modal = button.closest(".modifyEventsModal");
        closeModal(modal);
    })
});

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
        dates.innerHTML += `<div id="${i}" class="date" onclick="selectDay('${i}')">
                                <p class="dateText">${i}</p>
                             </div>`;
        console.log(i);
    }

    monthYear.textContent = `${monthNames[month]} ${year}`;

}

function selectDay(id) {

    selectedDate = [id, month, year];

    const prevSelectedDay = selectedDay;

    selectedDay = document.getElementById(`${id}`);


    prevSelectedDay.classList.remove("selectedDate");
    prevSelectedDay.classList.add("date");

    selectedDay.classList.add("selectedDate");
    selectedDay.classList.remove("date");
}

function openModal(modal, type) {

    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");

    if (type == "add") {
        const addEventTitle = document.getElementById("addEventTitle")
        addEventTitle.textContent = `Add Event to ${selectedDate[0]}/${selectedDate[1] + 1}/${selectedDate[2]}`;
    }

    if (type == "modify") {
        const modifyEventsTitle = document.getElementById("modifyEventsTitle")
        modifyEventsTitle.textContent = `Modify Events for ${selectedDate[0]}/${selectedDate[1] + 1}/${selectedDate[2]}`;
    }
}

function closeModal(modal) {

    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

function addEvent() {

    selectedDay.innerHTML += "<p class='eventText'>test event</p>"
    closeModal(document.getElementById("addEventModal"));
}