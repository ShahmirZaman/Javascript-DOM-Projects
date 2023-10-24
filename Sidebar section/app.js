const button = document.querySelector(".btn");
console.log(button);
const bars = document.querySelector("i");
console.log(bars);
const sideBar = document.querySelector(".sidebar");
console.log(sideBar);

function crossHandler() {
    sideBar.style.display = "none";
}
function barHandler() {
   sideBar.style.display = (sideBar.style.display === "none")? "flex":"none";
}