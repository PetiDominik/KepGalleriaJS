window.addEventListener("load", main);
let actImg = 0;
function main() {
    const KEP_NEVEK = ["kep.jpg", "kep1.jpg", "kep2.png", "kep3.jpg", "kep4.jpg", "kep5.jpg", "kep6.jpg", "kep7.jpg"]

    kepekMegjelenit(KEP_NEVEK);
}

function kepekMegjelenit(kepek) {
    const DIV = document.getElementById("kepek");
    const LEFT_BUTTON = document.getElementById("left");
    const RIGHT_BUTTON = document.getElementById("right");
    
    for (let i = 0; i < kepek.length; i++) {
        DIV.innerHTML += `<div><img src="kepek/${kepek[i]}" alt="${kepek[i]}" id="${i}"></div>`;
    }
    const KEPEK = DIV.querySelectorAll("img");

    for (let i = 0; i < KEPEK.length; i++) {//let kep in KEPEK
        KEPEK[i].addEventListener("click", kepClick)
    }

    LEFT_BUTTON.addEventListener("click", function(){
        const KEP = document.getElementById("nagy-kep-img");
        const DIV = document.getElementById("kepek");
        const KEPEK = DIV.querySelectorAll("img");
        
        actImg--;
        if (actImg < 0) {
            actImg = KEPEK.length-1;
        }

        KEP.src = KEPEK[actImg].src;
    });
    RIGHT_BUTTON.addEventListener("click", function(){
        const KEP = document.getElementById("nagy-kep-img");
        const DIV = document.getElementById("kepek");
        const KEPEK = DIV.querySelectorAll("img");
        
        actImg++;
        if (actImg >= KEPEK.length) {
            actImg = 0;
        }

        KEP.src = KEPEK[actImg].src;
    });
}

function kepClick() {
    console.log("asd");
    const KEP = document.getElementById("nagy-kep-img");
    KEP.src = this.src;
    actImg = parseInt(this.id);
    console.log(KEP.src);
}