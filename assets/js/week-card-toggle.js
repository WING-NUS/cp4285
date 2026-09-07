const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-week-card]");

  if (!card || event.target.closest("summary")) return;

  const interactiveElement = event.target.closest(
    "a, button, input, select, textarea, label, iframe, [contenteditable], [role='button']",
  );

  if (interactiveElement) return;

  card.open = !card.open;
});

document.querySelectorAll("[data-week-card]").forEach((card) => {
  card.addEventListener("toggle", () => {
    if (!card.open) return;

    const previouslyOpenCard = [...document.querySelectorAll("[data-week-card]")].find(
      (otherCard) => otherCard !== card && otherCard.open,
    );

    if (previouslyOpenCard) {
      previouslyOpenCard.open = false;
      previouslyOpenCard.scrollIntoView({
        behavior: reducedMotion.matches ? "auto" : "smooth",
        block: "start",
      });
    }

    if (reducedMotion.matches) return;

    card.querySelector(".weekly-detail-card__content")?.animate(
      [
        { opacity: 0, transform: "translateY(-0.5rem)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 240, easing: "ease-out" },
    );
  });
});
