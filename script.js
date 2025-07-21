function buildDonut() {
  const base = document.getElementById('base').value;
  const glaze = document.getElementById('glaze').value;
  const toppings = [];

  if (document.getElementById('sprinkles').checked) {
    toppings.push('Sprinkles');
  }
  
  let result = `🍩 A ${base} donut with ${glaze} glaze`;

  if (toppings.length > 0) {
    result += ` and ${toppings.join(' & ')} topping(s)`;
  }

  document.getElementById('donutPreview').innerHTML = `
    <h3>Your Donut Preview</h3>
    <p>${result}!</p>
  `;
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

