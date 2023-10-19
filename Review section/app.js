const person = [
    {
        name:"Brian Shaw",
        designation:"Frontend Developer",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta possimus magni ipsum? Facilis facere doloremque, nulla rerum quibusdam porro expedita.",
        img:"./Assets/Person1.jpeg",
    },
    {
        name:"Susan Smith",
        designation:"Web Developer",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia expedita vero aperiam fuga quos illum laboriosam nemo reprehenderit dolorum nulla.",
        img:"./Assets/Person2.jpg",
    },
    {
        name:"Harvey Ford",
        designation:"Backend Developer",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi, distinctio exercitationem inventore voluptas aperiam perspiciatis officiis! Nesciunt, pariatur accusamus.",
        img:"./Assets/Person3.jpg",
    },
    {
        name:"Bill Gates",
        designation:"Founder",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor eos iusto asperiores sit perspiciatis aliquam eligendi architecto animi. Omnis!",
        img:"./Assets/Person4.jpg",
    },
    {
        name:"Lucy Campbell",
        designation:"Project Manager",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates similique reiciendis cupiditate fugit a unde repudiandae eius, molestiae nobis.",
        img:"./Assets/Person5.jpg",
    },
];

const userName = document.getElementById("name");
const userImage = document.getElementById("image");
const userDesignation = document.getElementById("designation");
const userDescription = document.getElementById("description");

let userCurrentIndex = 0;
console.log("UserIndex: ",userCurrentIndex)

function setUser() {
    userName.textContent = person[userCurrentIndex].name;
    userImage.src = person[userCurrentIndex].img;
    userDescription.textContent = person[userCurrentIndex].description;
    userDesignation.textContent = person[userCurrentIndex].designation;
}
setUser();

function forward() {
    userCurrentIndex++;
    console.log("User Index: ",userCurrentIndex)
    if(userCurrentIndex >= person.length) {
        userCurrentIndex = 0;
        console.log("User Index: ",userCurrentIndex);
    }
    setUser();
}
function backward() {
   userCurrentIndex--;
   console.log("User Index: ",userCurrentIndex)
   if(userCurrentIndex < 0) {
    userCurrentIndex = person.length - 1
    console.log("User Index: ",userCurrentIndex)
   }
   setUser();
}
