function hitung() {

  let inputs = ["LAB", "LBC", "LAC", "P1", "Q"];

  for (let id of inputs) {
    let val = document.getElementById(id).value;

    if (val === "" || isNaN(val)) {
      alert("Input harus berupa angka!\nPeriksa: " + id);
      document.getElementById(id).focus();
      return;
    }
  }

  // =========================
  // AMBIL INPUT
  // =========================
  let LAB = parseFloat(document.getElementById("LAB").value) || 0;
  let LBC = parseFloat(document.getElementById("LBC").value) || 0;
  let LAC = parseFloat(document.getElementById("LAC").value) || 0;
  let P  = parseFloat(document.getElementById("P1").value) || 0;
  let q  = parseFloat(document.getElementById("Q").value) || 0;

  // =========================
  // HITUNG RAV
  // =========================
  let RAV = P + (q * LAB);

  // =========================
  // SFD
  // =========================
  let DA1 = 0;
  let DA2 = RAV;
  let DB  = DA2 - (q * LAB);
  let DC1 = DB;
  let DC2 = DC1 - P;

  // =========================
  // NFD
  // =========================
  let NA = 0;
  let NB = 0;
  let NC = 0;

  // =========================
  // BMD
  // =========================
  let MA = (-P * LAC) - (q * LAB) * (0.5 * LAB);
  let MB = MA + (RAV * LAB) - (q * LAB) * (0.5 * LAB);
  let MC = MA + (RAV * LAC) - (q * LAB) * (0.5 * LAB);

  // =========================
  // OUTPUT (4 DESIMAL)
  // =========================
  document.getElementById("RAV").innerText = RAV.toFixed(4);

  document.getElementById("DA1").innerText = DA1.toFixed(4);
  document.getElementById("DA2").innerText = DA2.toFixed(4);
  document.getElementById("DB").innerText  = DB.toFixed(4);
  document.getElementById("DC").innerText  = DC1.toFixed(4);
  document.getElementById("DD1").innerText = DC2.toFixed(4);

  document.getElementById("NA").innerText = NA.toFixed(4);
  document.getElementById("NB").innerText = NB.toFixed(4);
  document.getElementById("NC").innerText = NC.toFixed(4);

  document.getElementById("MA").innerText = MA.toFixed(4);
  document.getElementById("MB").innerText = MB.toFixed(4);
  document.getElementById("MC").innerText = MC.toFixed(4);

}
