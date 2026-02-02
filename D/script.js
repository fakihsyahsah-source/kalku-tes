function hitung() {

  const fields = ["lac","lcd","lde","leb","p1","p2","q"];

  let errorBox = document.getElementById("errorBox");
  errorBox.innerHTML = "";

  // RESET ERROR BORDER
  fields.forEach(id => {
    document.getElementById(id).classList.remove("input-error");
  });

  // VALIDASI INPUT
  for (let id of fields) {

    let el = document.getElementById(id);

    if (el.value === "" || isNaN(el.value)) {

      errorBox.innerHTML = "Input " + id.toUpperCase() + " harus berupa angka!";

      el.classList.add("input-error");
      el.focus();
      return;
    }
  }

  // AMBIL DATA
  let Lac = parseFloat(document.getElementById("lac").value);
  let Lcd = parseFloat(document.getElementById("lcd").value);
  let Lde = parseFloat(document.getElementById("lde").value);
  let Leb = parseFloat(document.getElementById("leb").value);

  let P1 = parseFloat(document.getElementById("p1").value);
  let P2 = parseFloat(document.getElementById("p2").value);
  let q  = parseFloat(document.getElementById("q").value);

  // ========================
  // PERHITUNGAN REAKSI
  // ========================

  let RAV =
    (P1 * (Lcd + Lde + Leb) +
     q * Lde * ((0.5 * Lde) + Leb) +
     P2 * Leb) /
    (Lac + Lcd + Lde + Leb);

  let RBV =
    (P1 * Lac +
     q * Lde * ((0.5 * Lde) + Lcd + Lac) +
     P2 * (Lde + Lcd + Lac)) /
    (Lac + Lcd + Lde + Leb);

  // ========================
  // KONTROL
  // ========================

  let KONTROL = RAV + RBV - P1 - P2 - (q * Lde);

  // ========================
  // SFD
  // ========================

  let DA1 = 0;
  let DA2 = DA1 + RAV;

  let DC1 = DA2;
  let DC2 = DC1 - P1;

  let DD1 = DC2;
  let DD2 = DD1;

  let DE1 = DD2 - q * Lde;
  let DE2 = DE1 - P2;

  let DB1 = DE2;
  let DB2 = DB1 + RBV;

  // ========================
  // BMD
  // ========================

  let BMA = 0;
  let BMC = RAV * Lac;

  let BMD = RAV * (Lac + Lcd) - P1 * Lcd;

  let BME =
    RAV * (Lac + Lcd + Lde) -
    P1 * (Lcd + Lde) -
    q * Lde * 0.5 * Lde;

  let BMB = 0;

  // ========================
  // OUTPUT
  // ========================

  document.getElementById("rav").innerText = RAV.toFixed(4);
  document.getElementById("rbv").innerText = RBV.toFixed(4);
  document.getElementById("kontrol").innerText = KONTROL.toFixed(4);

  document.getElementById("da1").innerText = DA1.toFixed(4);
  document.getElementById("da2").innerText = DA2.toFixed(4);
  document.getElementById("dc1").innerText = DC1.toFixed(4);
  document.getElementById("dc2").innerText = DC2.toFixed(4);
  document.getElementById("dd1").innerText = DD1.toFixed(4);
  document.getElementById("dd2").innerText = DD2.toFixed(4);
  document.getElementById("de1").innerText = DE1.toFixed(4);
  document.getElementById("de2").innerText = DE2.toFixed(4);
  document.getElementById("db1").innerText = DB1.toFixed(4);
  document.getElementById("db2").innerText = DB2.toFixed(4);

  document.getElementById("ma").innerText = BMA.toFixed(4);
  document.getElementById("mc").innerText = BMC.toFixed(4);
  document.getElementById("md").innerText = BMD.toFixed(4);
  document.getElementById("me").innerText = BME.toFixed(4);
  document.getElementById("mb").innerText = BMB.toFixed(4);

}

