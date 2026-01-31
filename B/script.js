function val(id){
    return parseFloat(document.getElementById(id).value) || 0;
}

function hitung(){

// ==================
// INPUT JARAK
// ==================
let LCD = val("LCD");
let LDA = val("LDA");
let LAE = val("LAE");
let LEF = val("LEF");
let LFB = val("LFB");

// ==================
// INPUT BEBAN
// ==================
let P1 = val("P1");
let P2 = val("P2");
let P3 = val("P3");
let Q  = val("Q");

// ==================
// TOTAL BEBAN
// ==================
let TotalBeban = P1 + P2 + P3 + Q * (LDA + LAE);

// ==================
// REAKSI TUMPUAN
// ==================
let MomenB =
    P1 * (LCD + LDA + LAE + LEF + LFB) +
    P2 * (LEF + LFB) +
    P3 * LFB +
    Q  * (LDA + LAE) * ((LDA + LAE)/2 + LEF + LFB);

let RAV = MomenB / (LAE + LEF + LFB);
let RBV = TotalBeban - RAV;

// ==================
// SFD
// ==================
let DC1 = 0;
let DC2 = -P1;

let DD1 = DC2;
let DD2 = DD1;

let DA1 = DD2 - (Q * LDA);
let DA2 = DA1 + RAV;

let DE1 = DA2 - (Q * LAE);
let DE2 = DE1 - P2;

let DF1 = DE2;
let DF2 = DF1 - P3;

let DB1 = DF2;
let DB2 = DB1 + RBV;

// ==================
// NFD (belum didefinisikan)
// ==================
let NA = 0;
let NB = 0;
let NC = 0;
let ND = 0;
let NE = 0;
let NF = 0;

// ==================
// BMD
// ==================
let MC = 0;

let MD = -P1 * LCD;

let MA =
    (-P1 * (LCD + LDA)) -
    (Q * LDA * LDA / 2);

let ME =
    (-P1 * (LCD + LDA + LAE)) +
    (RAV * LAE) -
    (Q * (LDA + LAE) * (LDA + LAE) / 2);

let MF =
    (-P1 * (LCD + LDA + LAE + LEF)) +
    (RAV * (LAE + LEF)) -
    (Q * (LDA + LAE) * ((LDA + LAE)/2 + LEF)) -
    (P2 * LEF);

let MB = 0;

// ==================
// OUTPUT
// ==================
document.getElementById("RAV").innerText = RAV.toFixed(4);
document.getElementById("RBV").innerText = RBV.toFixed(4);

document.getElementById("DC1").innerText = DC1.toFixed(4);
document.getElementById("DC2").innerText = DC2.toFixed(4);
document.getElementById("DD1").innerText = DD1.toFixed(4);
document.getElementById("DD2").innerText = DD2.toFixed(4);
document.getElementById("DA1").innerText = DA1.toFixed(4);
document.getElementById("DA2").innerText = DA2.toFixed(4);
document.getElementById("DE1").innerText = DE1.toFixed(4);
document.getElementById("DE2").innerText = DE2.toFixed(4);
document.getElementById("DF1").innerText = DF1.toFixed(4);
document.getElementById("DF2").innerText = DF2.toFixed(4);
document.getElementById("DB1").innerText = DB1.toFixed(4);
document.getElementById("DB2").innerText = DB2.toFixed(4);

document.getElementById("NA").innerText = NA.toFixed(4);
document.getElementById("NB").innerText = NB.toFixed(4);
document.getElementById("NC").innerText = NC.toFixed(4);
document.getElementById("ND").innerText = ND.toFixed(4);
document.getElementById("NE").innerText = NE.toFixed(4);
document.getElementById("NF").innerText = NF.toFixed(4);

document.getElementById("MA").innerText = MA.toFixed(4);
document.getElementById("MB").innerText = MB.toFixed(4);
document.getElementById("MC").innerText = MC.toFixed(4);
document.getElementById("MD").innerText = MD.toFixed(4);
document.getElementById("ME").innerText = ME.toFixed(4);
document.getElementById("MF").innerText = MF.toFixed(4);

}

