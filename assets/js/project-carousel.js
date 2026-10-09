function initProjectCarousel() {
  document.querySelectorAll("[data-project-carousel]").forEach((carousel) => {
    if (carousel.dataset.carouselInitialized) return;

    const track = carousel.querySelector("[data-carousel-track]");
    const cards = [...track.querySelectorAll(".card")];
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const position = carousel.querySelector("[data-carousel-position]");
    if (!cards.length) return;

    carousel.dataset.carouselInitialized = "true";
    let updateFrame = null;

    function getGeometry() {
      const styles = getComputedStyle(track);
      const paddingLeft = parseFloat(styles.paddingLeft) || 0;
      const paddingRight = parseFloat(styles.paddingRight) || 0;
      const gap = parseFloat(styles.columnGap) || 0;
      const trackLeft = track.getBoundingClientRect().left;
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      const offsets = cards.map((card) =>
        card.getBoundingClientRect().left - trackLeft + track.scrollLeft - paddingLeft
      );
      const scrollLeft = Math.max(0, Math.min(track.scrollLeft, maxScroll));
      let first = 0;
      for (let index = 1; index < offsets.length; index++) {
        if (Math.abs(offsets[index] - scrollLeft) < Math.abs(offsets[first] - scrollLeft)) {
          first = index;
        }
      }
      const cardWidth = cards[0].getBoundingClientRect().width;
      const visible = Math.max(1, Math.round(
        (track.clientWidth - paddingLeft - paddingRight + gap) / (cardWidth + gap)
      ));
      return { offsets, maxScroll, scrollLeft, first, visible };
    }

    function update() {
      const { maxScroll, scrollLeft, first, visible } = getGeometry();
      previous.disabled = scrollLeft <= 1;
      next.disabled = maxScroll - scrollLeft <= 1;
      const last = Math.min(cards.length, first + visible);
      const text = visible > 1 ? `${first + 1}–${last} / ${cards.length}` : `${first + 1} / ${cards.length}`;
      if (position.textContent !== text) position.textContent = text;
    }

    function scheduleUpdate() {
      if (updateFrame !== null) return;
      updateFrame = requestAnimationFrame(() => {
        updateFrame = null;
        update();
      });
    }

    function scrollTo(left) {
      const { maxScroll } = getGeometry();
      track.scrollTo({
        left: Math.max(0, Math.min(left, maxScroll)),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }

    function move(direction) {
      const { offsets, first } = getGeometry();
      const index = Math.max(0, Math.min(first + direction, cards.length - 1));
      scrollTo(offsets[index]);
    }

    previous.addEventListener("click", () => move(-1));
    next.addEventListener("click", () => move(1));
    track.addEventListener("scroll", scheduleUpdate, { passive: true });
    track.addEventListener("keydown", (event) => {
      if (event.target !== track || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        move(event.key === "ArrowLeft" ? -1 : 1);
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        scrollTo(event.key === "Home" ? 0 : getGeometry().maxScroll);
      }
    });

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(track);
    cards.forEach((card) => resizeObserver.observe(card));
    update();
  });
}

export { initProjectCarousel };
