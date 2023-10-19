let numberParagraph = document.querySelector(".number");
console.log(numberParagraph);
let number = 0;

function decreaseHandler() {
    if( number >= 0) {
        number--;
        numberParagraph.textContent = number;
        numberParagraph.style.color = "red";
    }
}
function resetHandler() {
    number = 0;
    numberParagraph.textContent = number;
    numberParagraph.style.color = "blue";
}
function increaseHandler() {
    ++number;
    numberParagraph.textContent = number;
    numberParagraph.style.color = "green";
}