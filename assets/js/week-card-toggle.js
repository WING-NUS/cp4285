document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-week-card]");

  if (!card || event.target.closest("summary")) return;

  const interactiveElement = event.target.closest(
    "a, button, input, select, textarea, label, iframe, [contenteditable], [role='button']",
  );

  if (interactiveElement) return;

  card.open = !card.open;
});
