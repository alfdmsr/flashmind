const questions = {
  math: [
    { q: "Berapa hasil dari 2 + 2 × 2?", a: "6" },
    { q: "Apa nama bilangan imajiner √-1?", a: "i" },
    { q: "Berapa derajat sudut segitiga sama sisi?", a: "60°" },
    { q: "Rumus luas lingkaran?", a: "πr²" },
    { q: "Apa integral dari 2x?", a: "x² + C" },
  ],
  history: [
    { q: "Siapa proklamator Indonesia?", a: "Soekarno-Hatta" },
    { q: "Perang dunia II berakhir tahun?", a: "1945" },
    { q: "Kerajaan Hindu tertua di Indonesia?", a: "Kutai" },
    { q: "Penemu benua Amerika?", a: "Christopher Columbus" },
    { q: "Deklarasi Kemerdekaan AS tahun?", a: "1776" },
  ],
  science: [
    { q: "Rumus kimia garam?", a: "NaCl" },
    { q: "Planet terdekat dari matahari?", a: "Merkurius" },
    { q: "Simbol kimia emas?", a: "Au" },
    { q: "Satuan arus listrik?", a: "Ampere" },
    { q: "Proses pembuatan makanan tumbuhan?", a: "Fotosintesis" },
  ],
};

let currentTopic = "math";
let currentCard = 0;

function updateCard() {
  const card = questions[currentTopic][currentCard];
  document.getElementById("question").textContent = card.q;
  document.getElementById("answer").textContent = card.a;
}

function flipCard() {
  document.getElementById("flashcard").classList.toggle("flipped");
}

function nextCard() {
  currentCard = (currentCard + 1) % 5;
  updateCard();
  if (document.getElementById("flashcard").classList.contains("flipped")) {
    flipCard();
  }
}

function prevCard() {
  currentCard = (currentCard - 1 + 5) % 5;
  updateCard();
  if (document.getElementById("flashcard").classList.contains("flipped")) {
    flipCard();
  }
}

document.getElementById("topicSelector").addEventListener("change", (e) => {
  currentTopic = e.target.value;
  currentCard = 0;
  updateCard();
});

// Initialize first card
updateCard();
