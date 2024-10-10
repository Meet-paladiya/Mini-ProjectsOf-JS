let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let hscore = 0;

let btns = ["red", "blue", "purple", "yellow"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); 
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkAns(ind) { 
    if (userseq[ind] === gameseq[ind]) {
        if (gameseq.length == userseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if(level>hscore){
            hscore = level;
            document.querySelector("#highest-score").innerText = `Highest Score: ${hscore}`;
            }
        
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red"; 
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white"; // Fixed backgroundColor
        }, 50);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1); 
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) { 
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

let highestScoreElement = document.createElement("h3");
highestScoreElement.id = "highest-score";
highestScoreElement.innerText = `Highest-Score : ${hscore}`;
document.body.appendChild(highestScoreElement);

body.backgroundColor = "";