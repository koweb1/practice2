const quote = [
  "Feel the nature, be a reflection of nature, and let nature speak through you.",
  "In every leaf lies a lesson — to grow, to let go, and to begin again.",
  "The sunrise doesn’t ask for applause, yet it shines every morning. Be like that.",
  "Let nature remind you: even after the harshest storm, flowers still bloom.",
  "Flow like the river — calm in your depth, unstoppable in your direction.",
  "The mountains don’t move for anyone, yet they inspire everyone. Stand firm in your purpose.",
  "Grow wild, live free — nature thrives without permission.",
  "The earth whispers wisdom to those who pause to listen.",
  "Just like nature, your seasons of change are part of your beauty.",
  "Don’t rush your bloom. Even the sun takes time to rise.",
  "Let your spirit be as boundless as the sky and as grounded as the soil.",
  "Even in silence, the forest speaks — listen with your soul.",
  "The roots of patience grow the tallest trees.",
  "Stars shine brightest in the darkest night — remember that when life feels dim.",
  "Nature doesn’t hurry, yet everything gets done. So trust your timing.",
  "Be like the ocean — deep, powerful, and beautifully calm on the surface.",
  "A single flower can teach more about hope than a thousand books.",
  "The wind never stays still, yet it carries seeds of life everywhere.",
  "You are made of the same elements that paint sunsets — never doubt your light.",
  "Every storm ends, and every sky clears. Hold on — your dawn is coming.",
  "The rain doesn’t fall to destroy; it falls to renew.",
  "The beauty of life lies in its wild imperfection — just like nature itself.",
  "Leaves fall, but trees don’t fear; they know spring will come again.",
  "When you feel lost, look at the stars — they’ve guided wanderers for ages.",
  "Let your heart be like a forest — quiet, deep, and full of life.",
  "Nature teaches balance — to stand tall, yet bend when the wind blows.",
  "Listen to the river; it knows there’s no need to rush to reach the sea.",
  "The desert may seem empty, yet it holds strength beyond measure.",
  "Every sunset is proof that endings can be beautiful too.",
  "Like a seed in the dark, you are growing in ways you cannot yet see."
];

const text = document.getElementById("text");
const click = document.getElementById("click-me");

click.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quote.length);
  text.innerHTML = quote[random];
});


const elements = document.querySelectorAll('.about-image img, .about-text');

function showOnScroll() {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight - 100;

    if (position < windowHeight) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);



  