let div = document.querySelector("div");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    if(item.innerText == ""){
        alert("Please enter Activity");
    }

    let delbtn = document.createElement("button")
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});

    ul.addEventListener("click", function(event) {
        let delbtn = event.target.classList.contains("delete");
        if (delbtn) {
            event.target.parentNode.remove();
            }
    });

