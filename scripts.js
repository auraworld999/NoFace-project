
// === Шепотовые звуки ===
const whisperSounds = [
  new Audio('rhythm/whisper1.mp3'),
  new Audio('rhythm/whisper2.mp3'),
  new Audio('rhythm/whisper3.mp3')
];

function playWhisper() {
  const sound = whisperSounds[Math.floor(Math.random() * whisperSounds.length)];
  sound.volume = 0.2;
  sound.play();
}

// === Эффект при наведении на маски ===
const masks = document.querySelectorAll('.mask');
masks.forEach(mask => {
  mask.addEventListener('mouseenter', () => {
    mask.classList.add('glow');
    playWhisper();
  });
  mask.addEventListener('mouseleave', () => {
    mask.classList.remove('glow');
  });
});

// === Кнопка "Купить" ===
const buyBtn = document.getElementById('buy-btn');
if (buyBtn) {
  buyBtn.addEventListener('click', () => {
    window.open('https://example.com/buy-token', '_blank');
  });
}

// === Кнопка "Телеграм" ===
const telegramBtn = document.getElementById('telegram-btn');
if (telegramBtn) {
  telegramBtn.addEventListener('click', () => {
    window.open('https://t.me/your_channel_name', '_blank');
  });
}

// === Появление R-бонусов при скролле ===
const bonusSection = document.querySelector('.r-bonuses');
if (bonusSection) {
  window.addEventListener('scroll', () => {
    const rect = bonusSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bonusSection.classList.add('visible');
    }
  });
}

// === Эффект "дымка" при наведении на кнопки ===
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.classList.add('smoke');
  });
  button.addEventListener('mouseleave', () => {
    button.classList.remove('smoke');
  });
});

