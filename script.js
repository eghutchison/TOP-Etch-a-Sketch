const container = document.querySelector("#container");
const btn = document.querySelector("#reset");
let side = 16;

createGrid(side);

//let mouseState = true;
//document.addEventListener("mouseup", () => {mouseState = true});
//document.addEventListener("mousedown", () => {mouseState = false});

btn.addEventListener("click", () => {side = prompt("How many squares to a side? (Max. 100)"); createGrid(Math.min(100,side));})


function createGrid (side) {
    container.replaceChildren();
    for (let i=0; i < side ** 2; i++) {
        let square = document.createElement("div");
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let x = 0;
        square.style.width = (100/side)+"%"
        square.style.height = (100/side)+"%"
        container.append(square);
        square.addEventListener("mouseover", () => /*{if (mouseState === true)*/ {
        square.style.backgroundColor = `rgba(${r},${g},${b},${Math.min(x += 0.1, 1)})`;}/*}*/);
}
}
