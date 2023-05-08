const box = ["hello", "Name", "Data", "Personal" ];
let myBox = box[getRandomNumber()];

document.getElementById("fetch").innerHTML = myBox;

function getRandomNumber(){
    return Math.floor(Math.random()*box.length);
}