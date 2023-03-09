window.addEventListener("load", main);

function main() {
    const KEPEK = ["kep.jpg", "kep1.jpg", "kep2.png", "kep3.jpg", "kep4.jpg", "kep5.jpg", "kep6.jpg", "kep7.jpg"]

    kepekMegjelenit(KEPEK);
}

function kepekMegjelenit(kepek) {
    const DIV = document.getElementById("kep-galleria");
    
    for (let i = 0; i < kepek.length; i++) {
        DIV.innerHTML += `<div><img src="kepek/${kepek[i]}" alt="${kepek[i]}"></div>`;
    }

    const KEPEK = document.querySelectorAll("img");

    for (let i = 0; i < KEPEK.length; i++) {//let kep in KEPEK
        KEPEK[i].addEventListener("click", kepClick)
    }

}

function kepClick() {
    const KEP = document.getElementById("nagy-kep-img");
    KEP.src = this.src;
    console.log(KEP.src);
}