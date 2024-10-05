let btn = document.querySelector("button");


btn.addEventListener("click",function() {

    let h2 = document.querySelector("h2");
    let Randomcolor = getRandomColor();
    h2.innerText = Randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = Randomcolor;

    console.log("color updated");
    });

function getRandomColor() {
    let red = Math.floor(Math.random() * 255 +1);
    let green = Math.floor(Math.random() * 255 +1);
    let blue = Math.floor(Math.random() * 255 +1);

    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;
}
