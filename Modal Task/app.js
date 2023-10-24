const modalDiv = document.createElement('div');
document.body.appendChild(modalDiv);
modalDiv.innerHTML =`<button onclick = "xBtnHandler()">X</button>`;
const modalContent = document.createElement('h2');
const modalContentText = document.createTextNode('Modal Content');
modalContent.appendChild(modalContentText);
modalDiv.appendChild(modalContent);
modalContent.style.display = "none";
modalContent.previousElementSibling.style.display = "none";
modalDiv.style.opacity = "0";


function btnHandler() {
    modalContent.style.display = "block";
    modalContent.previousElementSibling.style.display = "block";
    modalDiv.style.opacity = "1";
    modalDiv.classList.add("modal");
    modalContent.classList.add("heading");
    modalContent.previousElementSibling.classList.add("X-btn");    
}
function xBtnHandler() {
    modalContent.style.display = "none";
    modalContent.previousElementSibling.style.display = "none";
    modalDiv.style.opacity = "0";
    modalDiv.classList.remove("modal");
    modalContent.classList.remove("heading");
    modalContent.previousElementSibling.classList.remove("X-btn");
}