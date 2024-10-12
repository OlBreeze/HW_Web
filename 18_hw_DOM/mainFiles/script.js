const container = document.querySelector('.container');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const elTime = document.querySelector('#timeDisplay');

////------------  box1 ---
setInterval(moveDiagonal, 10);
let pos = 0;
let flagDown = true;

function moveDiagonal() {

    flagDown ? pos++ : pos--;

    if ((flagDown && pos >= container.offsetWidth - box1.offsetWidth) ||
        (!flagDown && pos <= 0)) {
        flagDown = !flagDown;
    }

    box1.style.top = pos + 'px';
    box1.style.left = pos + 'px';
}

////------------  box2 ---
setInterval(moveSquare, 10);
let posH = 0;
let posW = 0;
let flag = 'down';

function moveSquare() {

    switch (flag) {
        case 'down':
            posH++;
            break;
        case 'left':
            posW++;
            break;
        case 'up':
            posH--;
            break;
        case 'right':
            posW--;
            break;
    }

    box2.style.top = posH + 'px';
    box2.style.left = posW + 'px';

    if (flag === 'down' && posH >= container.offsetHeight - box2.offsetHeight) flag = 'left';
    if (flag === 'left' && posW >= container.offsetWidth - box2.offsetWidth) flag = 'up';
    if (flag === 'up' && posH <= 0) flag = 'right';
    if (flag === 'right' && posW <= 0) flag = 'down';
}

///---------------------------- time ------------
setInterval(setTime, 1000);

function setTime() {
    const date = new Date();

    const hour = date.getHours().toString().padStart(2, '0');
    const min  = date.getMinutes().toString().padStart(2, '0');
    const sec  = date.getSeconds().toString().padStart(2, '0');

    elTime.innerHTML = `Current time: ${hour} : ${min} : ${sec}`;
}
