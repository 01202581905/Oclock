"use strict"

const secondHand = document.querySelector('#second');
const minuteHand = document.querySelector('#min');
const hourHand = document.querySelector('#hour');

const getTime = () => {
    const now = new Date();
    const hour = ((now.getHours() / 12) * 360) + 90;
    const minute = ((now.getMinutes() / 60) * 360) + 90;
    const second = ((now.getSeconds() / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${second}deg)`;
    minuteHand.style.transform = `rotate(${minute}deg)`;
    hourHand.style.transform = `rotate(${hour}deg)`;
};

setInterval(getTime, 1000);