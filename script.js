const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');


const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colorFour = document.querySelector('.four');
let root = document.documentElement;

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {
    clearInterval(countTime)

    countTime = setInterval(() => {

        if (seconds < 9) {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`
        } else {
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`
        }

    }, 1000)
}

const handlePause = () => {
    clearInterval(countTime);
}

handleStop = () => {

    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent)
        console.log(timesArr)
    }

    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

    clearStuff()
}

const handleReset = () => {
    clearStuff()
    time.style.visibility = 'hidden';
    timesArr = [];

}

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;

}


const showHistory = () => {

    timeList.textContent = '';
    let num = 1;

    timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`

        timeList.appendChild(newTime)
        console.log(timeList)
        num++;
    })
}

const showModal = () => {
    if (!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none';
    }
    modalShadow.classList.toggle('modal-animation')
}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false);

colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors');
    if (colorPanel.style.display === 'flex') {
        colorPanel.style.display = 'none'
    } else {
        colorPanel.style.display = 'flex'
    }
})


colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#3694e7')
    root.style.setProperty('--background-main', '#70c3fc')
});

colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#1ed99d')
    root.style.setProperty('--background-main', '#a0f1cc')
});

colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#f191e1')
    root.style.setProperty('--background-main', '#f184e7')
});

colorFour.addEventListener('click', () => {
    root.style.setProperty('--first-color', '#efb012')
    root.style.setProperty('--background-main', '#efc988')
});
