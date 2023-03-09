window.addEventListener("load", main);

function main() {

    divBeszur();
}

function divBeszur() {
    const BESZUR_HELY = document.querySelector("article");

    BESZUR_HELY.innerHTML += `<div><img id=\"image\" src=\"kepek/kep.jpg\"></div>`;
    
    const DIV = document.querySelector("article div");
    DIV.innerHTML += "<button>Nyomj meg</button>";

    const BUTTON = document.querySelector("article div button");

    BUTTON.addEventListener("click", formaz);
    addEventListener("scroll", formaz);


    const KEP = document.querySelector("article div img");

    KEP.addEventListener("mouseover", nagyit);
    KEP.addEventListener("mouseout", kicsinyit);

    window.addEventListener("mousemove", moveMouse);
}

function formaz() {
    const DIV = document.querySelector("article div");
    let classok = DIV.classList;
    let i = 0;
    if (vanEBenne(classok, "formazas")) {
        DIV.classList.remove("formazas");
    }else {
        DIV.classList.add("formazas");
    }
}

function nagyit() {
    const KEP = document.querySelector("article div img");
    //KEP.style.scale = 1.1;
    KEP.style.border = "10px solid red";
}

function kicsinyit() {
    const KEP = document.querySelector("article div img");
    //KEP.style.scale = 1;
    KEP.style.border = "";
}

function moveMouse() {
    const DIV = document.querySelector("article div");
    DIV.style.backgroundColor = `rgb(${Math.random()*255+1}, ${Math.random()*255+1}, ${Math.random()*255+1})`;
}

/*-------------------------------------------------------------------*/

function vanEBenne(lista, mi) {
    let i = 0;
    while (i < lista.length && lista[i] != mi) {
        i++;
    }
    return i < lista.length;
}