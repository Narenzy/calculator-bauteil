const langeEl = document.getElementById("lange-el");
const dickeEl = document.getElementById("dicke-el");
const breiteEl = document.getElementById("breite-el");
const mengeEl = document.getElementById("menge-el");
const outEl = document.getElementById("out-el");
const out2El = document.getElementById("out2-el");
const number = 500


function calculate() {
    const lange = parseFloat(langeEl.value)||0;
    const dicke = parseFloat(dickeEl.value)||0;
    const breite = parseFloat(breiteEl.value)||0;
    const menge = parseFloat(mengeEl.value)||0;

        const sum =  (menge * dicke) + (breite * 2) + 300;
        outEl.textContent = "Folienbreite " + sum + " mm"
        const sum1 = lange + number
        out2El.textContent = "Folienlänge " + sum1 + " mm" 
}
