function val(id){
    return parseFloat(document.getElementById(id).value) || 0;
}

function hitung(){

// ==================
// INPUT
// ==================
let LAB = val("LAB");
let LBC = val("LBC");
let LCD = val("LCD");
let LDE = val("LDE");
let LAE = val("LAE");
let LAC = val("LAC");
let LAD = val("LAD");
let LCE = val("LCE");

let P1 = val("P1");
let P2 = val("P2");
let Q  = val("Q");

// ==================
// REAKSI
// ==================
let RAV = P1 + P2 + (Q * LCE);

// ==================
// SFD
// ==================
let DA1 = 0;
let DA2 = RAV;
let DB  = DA2 - P1;
let DC  = DB;
let DD1 = DC - (Q * LCD);
let DD2 = DD1 - P2;
let DE  = DD2 - (Q * LDE);

// ==================
// NFD
// ==================
let NA = 0;
let NB = 0;
let NC = 0;
let ND = 0;
let NE = 0;

// ==================
// BMD
// ==================
let MA = (-Q * LCE) * (0.5 * LCE + LAC) - (P2 * LAD) - (P1 * LAB);

let MB = MA + (RAV * LAB);

let MC = MA + (RAV * LAC) - (P1 * LBC);

let MD = MA + (RAV * LAD)
        - (P1 * (LBC + LCD))
        - (Q * LCD * 0.5 * LCD);

let ME = MA + (RAV * LAE)
        - (P1 * (LBC + LCD + LDE))
        - (Q * LCE * 0.5 * LCE)
        - (P2 * LDE);

// ==================
// OUTPUT
// ==================
document.getElementById("RAV").innerText = RAV.toFixed(4);

document.getElementById("DA1").innerText = DA1.toFixed(4);
document.getElementById("DA2").innerText = DA2.toFixed(4);
document.getElementById("DB").innerText  = DB.toFixed(4);
document.getElementById("DC").innerText  = DC.toFixed(4);
document.getElementById("DD1").innerText = DD1.toFixed(4);
document.getElementById("DD2").innerText = DD2.toFixed(4);
document.getElementById("DE").innerText  = DE.toFixed(4);

document.getElementById("NA").innerText = NA.toFixed(4);
document.getElementById("NB").innerText = NB.toFixed(4);
document.getElementById("NC").innerText = NC.toFixed(4);
document.getElementById("ND").innerText = ND.toFixed(4);
document.getElementById("NE").innerText = NE.toFixed(4);

document.getElementById("MA").innerText = MA.toFixed(4);
document.getElementById("MB").innerText = MB.toFixed(4);
document.getElementById("MC").innerText = MC.toFixed(4);
document.getElementById("MD").innerText = MD.toFixed(4);
document.getElementById("ME").innerText = ME.toFixed(4);

}

