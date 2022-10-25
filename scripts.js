const email = document.querySelector("#email");
const form = document.querySelector("form");
const feedback = document.querySelector(".feedback");
const container = document.querySelector(".container");

const mySet = new Set();


const displayText = () => {

    feedback.style.display = "block";
    setTimeout(clearFeedback, 3000);

}


const clearFeedback = () => feedback.style.display = "none";


const getContent = () => {

    const h1 = document.createElement('h1');
    h1.innerText = 'Hello World';
    container.append(h1);

}


form.addEventListener('submit', e => {
    e.preventDefault();
    displayText();
    mySet.add(email.value);
    form.reset();
});


const countDown = new Date().getTime() + 15000;


const timer = () => {

    const now = new Date().getTime();
    const gap = countDown - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    second = Math.floor((gap % (minute)) / second);
    minute = Math.floor((gap % (hour)) / (minute));

    document.querySelector(".day").innerText = Math.floor(gap / (day));
    document.querySelector(".hour").innerText = Math.floor((gap % (day)) / (hour));
    document.querySelector(".minute").innerText = minute;
    document.querySelector(".second").innerText = second;


    if (minute <= 0 && second <= 0) {

        clearInterval(interval);
        container.classList.add('fade-out')
        setTimeout(() => container.replaceChildren(), 3000);
        setTimeout(() => {
            getContent();
            container.classList.add('fade-in')
        }, 3000)
    }
}

let interval = setInterval(timer, 1000);