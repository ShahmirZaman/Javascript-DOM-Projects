let colors = ["Blue","Green","Red","Yellow","Violet","Pink","Black","Grey"];
let colorName = document.querySelector("span");
function colorHandler() {
    const randomColor = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[randomColor];
    colorName.textContent = colors[randomColor];
}