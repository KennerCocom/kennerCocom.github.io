function autoplayCarousel() {
  const carouselEl = document.getElementById("carouselF");
  const slideContainerEl = carouselEl.querySelector("#slide-containerF");
  const slideEl = carouselEl.querySelector(".slideF");
  let slideWidth = slideEl.offsetWidth;
  // Add click handlers
  document
    .querySelector("#back-buttonF")
    .addEventListener("click", () => navigate("backward"));
  document
    .querySelector("#forward-buttonF")
    .addEventListener("click", () => navigate("forward"));
  // Add keyboard handlers
  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
      clearInterval(autoplay);
      navigate("backward");
    } else if (e.code === "ArrowRight") {
      clearInterval(autoplay);
      navigate("forward");
    }
  });
  // Add resize handler
  window.addEventListener("resize", () => {
    slideWidth = slideEl.offsetWidth;
  });
  // Autoplay
  /*
  const autoplay = setInterval(() => navigate("forward"), 20000);
  slideContainerEl.addEventListener("mouseenter", () =>
    clearInterval(autoplay)
  );
  */
  // Slide transition
  const getNewScrollPosition = (arg) => {
    const gap = 10;
    const maxScrollLeft = slideContainerEl.scrollWidth - slideWidth;
    if (arg === "forward") {
      const x = slideContainerEl.scrollLeft + slideWidth + gap;
      return x <= maxScrollLeft ? x : 0;
    } else if (arg === "backward") {
      const x = slideContainerEl.scrollLeft - slideWidth - gap;
      return x >= 0 ? x : maxScrollLeft;
    } else if (typeof arg === "number") {
      const x = arg * (slideWidth + gap);
      return x;
    }
  };
  const navigate = (arg) => {
    slideContainerEl.scrollLeft = getNewScrollPosition(arg);
  };
  // Slide indicators
  document.querySelectorAll(".slideF").forEach((slide) => {
    slideObserver.observe(slide);
  });
}
autoplayCarousel();
