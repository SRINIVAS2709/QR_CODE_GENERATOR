let container = document.querySelector(".container");
let qrInput = document.querySelector("#text");
let generateBtn = document.querySelector("#generate");
let qrImg = document.querySelector("#qr-img");
let Backbtn = document.querySelector("#back");


let preInput
let input

generateBtn.onclick = function(){
    input = qrInput.value.trim()

    if(!input){

        alert("Can't be Empty and need to be diffrent with previous Text..")
        return
    }

    else{
        preInput = input;
        generateBtn.innerText = "Generating QR Code...";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
        qrImg.onload = function(){
            container.classList.add("active");
            generateBtn.innerText = "Generate QR Code";

        }
    }
}

Backbtn.onclick = function(){
    container.classList.remove("active");
}


