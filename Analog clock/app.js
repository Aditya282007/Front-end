const hour = document.querySelector('.hand-hour');
const minute = document.querySelector('.hand-minute');
const second = document.querySelector('.hand-second');

setInterval(() => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    second.style.transform = `rotate(${secondsDegrees}deg)`;
    minute.style.transform = `rotate(${minutesDegrees}deg)`;
    hour.style.transform = `rotate(${hoursDegrees}deg)`;
}, 1000)
