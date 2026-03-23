// ambil chip dari localStorage
let chip = localStorage.getItem("chip") || 1000;
localStorage.setItem("chip", chip);

// update tampilan
if(document.getElementById("chip")){
  document.getElementById("chip").innerText = chip;
}
if(document.getElementById("saldo")){
  document.getElementById("saldo").innerText = chip;
}

// pindah ke game
function play(game){
  window.location.href = "slot.html?game=" + game;
}

// balik
function back(){
  window.location.href = "index.html";
}

// slot logic
let items = ["🍒","🍋","🍉","⭐","💎"];

function spin(){
  if(chip < 100){
    alert("Chip habis!");
    return;
  }

  chip -= 100;

  let a = rand();
  let b = rand();
  let c = rand();

  document.getElementById("slot").innerHTML = a+" "+b+" "+c;

  if(a == b && b == c){
    chip = parseInt(chip) + 500;
    alert("JACKPOT!");
  }

  localStorage.setItem("chip", chip);
  document.getElementById("chip").innerText = chip;
}

function rand(){
  return items[Math.floor(Math.random()*items.length)];
}

// ambil nama game
const params = new URLSearchParams(window.location.search);
if(document.getElementById("title")){
  document.getElementById("title").innerText = params.get("game");
}