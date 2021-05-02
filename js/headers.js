const carousels = document.querySelectorAll("header h1, header h2");
const fadeInTimeline = gsap.timeline();

fadeInTimeline
  .set(carousels, { opacity: 0 })
  .to(carousels, { opacity: 1, delay: 1, stagger: 0.5, duration: 1 });

const carouselH1 = document.querySelectorAll("header h1");
const carouselH2 = document.querySelectorAll("header h2");

carousels.forEach((carousel) => {
  const movementTimeline = gsap.timeline({
    repeat: -1,
  });

  const spanTag = carousel.querySelector("span");
  const size = spanTag.clientWidth;

  for (let i = 0; i < 30; i++) {
    carousel.appendChild(spanTag.cloneNode(true));
  }

  movementTimeline
    .set(carousel, { x: 0 })
    .to(carousel, { x: size * -1, duration: 6, ease: "linear" });
});
