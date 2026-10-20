const roket = document.getElementById("roket");

let roketX = 180;
let duraklatildi = false;

document.getElementById("duraklat").onclick = () => {

    duraklatildi = !duraklatildi;

    if (duraklatildi) {
        document.getElementById("duraklat").innerHTML = "▶️ Devam Et";
    } else {
        document.getElementById("duraklat").innerHTML = "⏸️ Duraklat";
    }

};
function guncelle() {
    roket.style.left = roketX + "px";
}

document.getElementById("sol").onclick = () => {

    if (roketX > 0) {
        roketX -= 30;
        roket.style.transform = "rotate(-100deg)";
        guncelle();
    }

};

document.getElementById("sag").onclick = () => {

    if (roketX < 360) {
        roketX += 30;
          roket.style.transform = "rotate(20deg)";
        guncelle();
    }

};

document.addEventListener("keydown", function(e){

    if(e.key === "ArrowLeft" && roketX > 0){
        roketX -= 30;
         roket.style.transform = "rotate(-100deg)";
    }

    if(e.key === "ArrowRight" && roketX < 360){
       roketX += 30;
       roket.style.transform = "rotate(20deg)";
    }

    guncelle();

}); 

const oyunAlani = document.getElementById("oyunAlani");
const skorYazi = document.getElementById("skor");

let skor = 0;
let rekor = localStorage.getItem("rekor") || 0;
let oyunBitti = false;

function copOlustur() {

    const cop = document.createElement("div");

    cop.className = "cop";
    cop.innerHTML = "☄️";

    let x = Math.random() * 340;

    cop.style.left = x + "px";
    cop.style.top = "0px";

    oyunAlani.appendChild(cop);

    let y = 0;

    let hareket = setInterval(() => {
    if (duraklatildi) {
        return;
    }
        let hiz = 5;

        
if (skor >= 20) hiz = 6;
if (skor >= 40) hiz = 7;
if (skor >= 60) hiz = 8;
if (skor >= 80) hiz = 9;
if (skor >= 100) hiz = 10;
if (skor >= 110) hiz = 11;
if (skor >= 120) hiz = 12;
if (skor >= 130) hiz = 13;
if (skor >= 140) hiz = 14;
if (skor >= 150) hiz = 15;
if (skor >= 160) hiz = 16;
if (skor >= 170) hiz = 17;
if (skor >= 180) hiz = 18;
if (skor >= 190) hiz = 19;
if (skor >= 200) hiz = 20;
if (skor >= 210) hiz = 21;
if (skor >= 220) hiz = 22;
if (skor >= 230) hiz = 23;
if (skor >= 240) hiz = 24;
if (skor >= 250) hiz = 25;
if (skor >= 260) hiz = 26;
if (skor >= 270) hiz = 27;
if (skor >= 280) hiz = 28;
if (skor >= 290) hiz = 29;
if (skor >= 300) hiz = 30;
if (skor >= 310) hiz = 31;
if (skor >= 320) hiz = 32;
if (skor >= 330) hiz = 33;
if (skor >= 340) hiz = 34;
if (skor >= 350) hiz = 35;
if (skor >= 360) hiz = 36;
if (skor >= 370) hiz = 37;
if (skor >= 380) hiz = 38;
if (skor >= 390) hiz = 39;
if (skor >= 400) hiz = 40;
if (skor >= 500) hiz = 41;

y += hiz;
        cop.style.top = y + "px";
const roketRect = roket.getBoundingClientRect();
const copRect = cop.getBoundingClientRect();

if (
    roketRect.left + 25 < copRect.right &&
    roketRect.right - 25 > copRect.left &&
    roketRect.top + 25 < copRect.bottom &&
    roketRect.bottom - 25 > copRect.top
){

    oyunBitti = true;
if (skor > rekor) {
    rekor = skor;
    localStorage.setItem("rekor", rekor);
}
    document.body.innerHTML = `
        <h1 style="color:red;font-size:60px;">
            💥 KAYBETTİNNN!!
        </h1>

        <h2>Skorun: ${skor}</h2>
<h2>🏆 Rekor: ${rekor}</h2>

        <button onclick="location.reload()">
            🔄 Yeniden Başlat
        </button>
    `;

    clearInterval(hareket);
}
        if (y > 600) {

            skor += 5;
            skorYazi.innerHTML = "Skor: " + skor;

            cop.remove();
            clearInterval(hareket);
        }

    }, 30);
}

setInterval(() => {

    if (!oyunBitti && !duraklatildi) {
        copOlustur();
    }

}, 1500);
