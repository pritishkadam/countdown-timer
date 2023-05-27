const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const futureDateElement = document.getElementById('futureDate');

const newYearDate = new Date('01 January 2024');

futureDateElement.innerText = `Time until ${newYearDate.toDateString()}`;

const executeTimer = () => {
    const currentDate = new Date();
    const milliseconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor((milliseconds ) / 3600 / 24);
    const hours = Math.floor((milliseconds ) / 3600) % 24;
    const minutes = Math.floor((milliseconds ) / 60) % 60;
    const seconds = Math.floor(milliseconds) % 60;

    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

const formatTime = (timeElement) => {
    if(timeElement.toString().length === 1) {
        return `0${timeElement}`;
    }
    return timeElement;
}

setInterval(executeTimer, 1000);