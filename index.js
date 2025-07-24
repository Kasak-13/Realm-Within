const backCard = document.getElementById('back-card');
const cardFlip = document.querySelector('.card-flip');

const backDesigns = [
  {
    title: "Poseidon🌊  – God of the Sea",
    desc: "You are the embodiment of tides and storm. Fierce, loyal, and commanding. Your soul answers the call of chaos and calm alike.",
    image: "Images/poseidon1.png"
  },
  {
    title: "⚡ Zeus – King of the Gods",
    desc: "You command with natural authority. People are drawn to your energy you are both storm and sky, a force impossible to ignore.",
    image: "Images/zeus.png"
  },
  
  {
    title: "🕯️ Hades – God of the Underworld",
    desc: "You walk between shadows and silence. Mysterious and calm, you guard your heart like a hidden realm.",
    image: "Images/hades1.png"
  },
  
  {
    title: "🦉 Athena – Goddess of Wisdom and War",
    desc: "You move with purpose. With every step, thought, and plan. Your mind is your sharpest blade",
    image: "Images/athena1.png"
  },
  
  {
    title: "💖 Aphrodite – Goddess of Love, Beauty, and Desire",
    desc: "You light the world with beauty and grace. Beneath your glow lies fierce confidence and unshakable inner knowing.",
    image: "Images/aphrodite1.png"
  },
  
  {
    title: "🌙 Artemis – Goddess of the Hunt and Moon",
    desc: "You belong to no one. Guided by instincts, you chase your own path though  moonlight and shadows.",
    image: "Images/artemis1.png"
  },
  
  {
    title: "🛡️ Ares – God of War",
    desc: "You are all fire, never afraid to face challenge. Even chaos bends your intensity",
    image: "Images/ares.png"
  },
  
  {
    title: "🌞 Apollo – God of the Sun and Prophecy",
    desc: "You shine in brilliance with an artist’s heart and a thinker’s mind.  You bring clarity to all that surrounds you.",
    image: "Images/apollo1.png"
  },
  
  {
    title: "👑 Hera - Queen of the Gods",
    desc: "You command loyalty and dignity. Your strength lies in the unspoken power of presence, devotion, and pride.",
    image: "Images/hera1.png"
  },
  
  {
    title: "🌾 Demeter – Goddess of the Harvest",
desc: "You nurture what others forget. Beneath your calm lies a fierce will to protect, preserve, and make things bloom.",
    image: "Images/demeter1.png"
  },
  
 
  
  {
    title: "🔥 Hephaestus – God of Fire and Forge",
desc: "You shape the world in silence. Through patience, fire, and flaw, you create beauty where others see ruin.",
    image: "Images/hephaestus1.png"
  },
  
  {
    title: "🕊️ Hermes – Messenger of the Gods",
desc: "You are the wind between thoughts — clever, quick, and ever-curious. Boundaries are merely invitations to explore.",
    image: "Images/hermes1.png"
  },
  
  {
    title: "🍷 Dionysus – God of Wine and Madness",
    desc: "You dance on the edge of chaos. Emotion is your art, and in surrender, you find your truth — wild, untamed, free.",
    image: "Images/dionysus1.png"
  },
  
];

function revealPersona() {
  const random = backDesigns[Math.floor(Math.random() * backDesigns.length)];

  backCard.innerHTML = `
    <h2>${random.title}</h2>
    <p>${random.desc}</p>
    <img src="${random.image}" class="zeus" alt="${random.title}">
    <button class="cta" onclick="resetCard()">Return</button>
  `;

  cardFlip.classList.add('flipped');
}

function resetCard() {
  cardFlip.classList.remove('flipped');
}

