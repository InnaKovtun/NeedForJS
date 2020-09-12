const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');

car.classList.add('car');
start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun); //срабатывает когда нажимается любая клавиша
document.addEventListener('keyup', stopRun); //срабатывает когда отпускается кнопка

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

const setting = {
    start: false,
    score: 0,
    speed: 3
};

function startGame() {
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame); //запуск анимированной функции
}

function playGame() {
    console.log('Play game');
    //пока старт = тру функция перезапускается
    if(setting.start){
        requestAnimationFrame(playGame); //рекурсия для плавной правильной работы
    } 
}

function startRun(event) {
    event.preventDefault();
    keys[event.key] = true;
}

function stopRun(event) {
    event.preventDefault();
    keys[event.key] = true;
}


