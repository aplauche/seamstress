const slides = document.querySelectorAll("div.slides");

slides.forEach((slide) => {
  let currentImage = 0;
  let zIndex = 1000000;

  const images = slide.querySelectorAll("img");

  images.forEach((image) => {
    image.style.zIndex = zIndex;
    zIndex -= 1;
  });

  // set opacity of images to zero then wait for them to load before running timeline
  gsap.set(images, { opacity: 0 });

  imagesLoaded(images, function () {
    const tl = gsap.timeline();

    // intro animation for images
    tl.set(images, {
      y: "500%",
      x: () => 800 - Math.random() * 1600,
      rotation: () => 20 - Math.random() * 40,
      opacity: 1,
    })
      .to(images, {
        x: 0,
        y: 0,
        stagger: -0.5,
        duration: 0.75,
        delay: 1,
      })
      .to(images, {
        rotation: () => 10 - Math.random() * 20,
        stagger: 0.15,
      });
  });

  // On click events
  slide.addEventListener("click", function (e) {
    // reduce the zindex counter
    zIndex -= 1;

    const current = images[currentImage % images.length];

    // randomize the direction of flip
    let direction = "150%";

    if (Math.random() > 0.5) {
      direction = "-150%";
    }

    const clickTl = gsap.timeline();
    clickTl
      .set(current, { x: 0 })
      .to(current, { x: direction, rotation: () => 20 - Math.random() * 40 })
      .set(current, { zIndex: zIndex })
      .to(current, { x: 0, rotation: () => 10 - Math.random() * 20 });

    // current.style.zIndex = zIndex;
    currentImage += 1;
  });
});
