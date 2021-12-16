//tangkap gambar pilihan computer
function getPilihanComp() {
  const comp = Math.random();
  // return : ketika menggnakan return maka jika permintaan sudah sesuai dia akan kembali ke awal dan berenti di return
  if (comp < 0.34) return "gunting";
  if (comp >= 0.34 && comp < 0.67) return "batu";
  return "kertas";
}

// fungsi untuk menangkap hasil
function getHasil(comp, player) {
  if (player == comp) return "Seri";
  if (player == "gunting")
    return comp == "batu" ? "Comp Menang" : "Player Menang";
  if (player == "batu")
    return comp == "kertas" ? "Comp Menang" : "Player Menang";
  if (player == "kertas")
    return comp == "gunting" ? "Comp Menang" : "Comp Kalah";

  return "Pilihan Tidak ada";
}

//tangkap pilihan player

const getPilihanPlayerbatu = document.querySelector(".batu");
const getPilihanPlayerkertas = document.querySelector(".kertas");
const getPilihanPlayergunting = document.querySelector(".gunting");
getPilihanPlayerbatu.addEventListener("click", () => main("batu"));
getPilihanPlayerkertas.addEventListener("click", () => main("kertas"));
getPilihanPlayergunting.addEventListener("click", () => main("gunting"));

function main(pilihanPlayer) {
  const pilihanComp = getPilihanComp();
  const hasil = getHasil(pilihanComp, pilihanPlayer);
  console.log("comp : " + pilihanComp);
  console.log("Player : " + pilihanPlayer);
  console.log("Hasil :" + hasil);

  if (pilihanComp == "gunting") {
    const addStylePilihanComp = document.querySelector(".guntingCom");

    addStylePilihanComp.style.backgroundColor = "green";
    addStylePilihanComp.style.borderRadius = "30px";
  } else if (pilihanComp == "batu") {
    const addStylePilihanComp = document.querySelector(".batuCom");

    addStylePilihanComp.style.backgroundColor = "red";
    addStylePilihanComp.style.borderRadius = "30px";
  } else {
    const addStylePilihanComp = document.querySelector(".kertasCom");

    addStylePilihanComp.style.backgroundColor = "yellow";
    addStylePilihanComp.style.borderRadius = "30px";
  }
  if (hasil == "Seri") {
    const info = document.querySelector(".info");
    info.innerHTML = hasil;
    info.style.backgroundColor = "green";
  } else if (hasil == "Player Menang") {
    const info = document.querySelector(".info");
    info.innerHTML = hasil;
    info.style.backgroundColor = "yellow";
  } else if (hasil == "Player Kalah") {
    const info = document.querySelector(".info");
    info.innerHTML = hasil;
    info.style.backgroundColor = "yellow";
  } else if (hasil == "Comp Menang") {
    const info = document.querySelector(".info");
    info.innerHTML = hasil;
    info.style.backgroundColor = "orange";
  } else if (hasil == "Comp Kalah") {
    const info = document.querySelector(".info");
    info.innerHTML = hasil;
    info.style.backgroundColor = "orange";
  }
}
