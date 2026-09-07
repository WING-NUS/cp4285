const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const animationState = new WeakMap();
const animationOptions = { duration: 260, easing: "ease-in-out" };

function contentFor(card) {
  return card.querySelector(".weekly-detail-card__content");
}

function cancelAnimation(card) {
  animationState.get(card)?.animation.cancel();
}

function animateContent(card, opening) {
  const content = contentFor(card);

  if (!content || reducedMotion.matches) {
    card.open = opening;
    return Promise.resolve();
  }

  cancelAnimation(card);

  if (opening) {
    card.open = true;
    content.style.height = "0px";
    content.style.overflow = "hidden";
    const targetHeight = `${content.scrollHeight}px`;
    const animation = content.animate(
      [{ height: "0px", opacity: 0 }, { height: targetHeight, opacity: 1 }],
      animationOptions,
    );
    const state = { animation };
    animationState.set(card, state);

    return animation.finished.catch(() => {}).then(() => {
      if (animationState.get(card) !== state) return;
      content.style.height = "";
      content.style.overflow = "";
      animationState.delete(card);
    });
  }

  const startHeight = `${content.getBoundingClientRect().height}px`;
  content.style.height = startHeight;
  content.style.overflow = "hidden";
  const animation = content.animate(
    [{ height: startHeight, opacity: 1 }, { height: "0px", opacity: 0 }],
    animationOptions,
  );
  const state = { animation };
  animationState.set(card, state);

  return animation.finished.catch(() => {}).then(() => {
    if (animationState.get(card) !== state) return;
    card.open = false;
    content.style.height = "";
    content.style.overflow = "";
    animationState.delete(card);
  });
}

async function setOpenCard(card) {
  const opening = !card.open;

  if (!opening) {
    await animateContent(card, false);
    return;
  }

  const openCards = [...document.querySelectorAll("[data-week-card][open]")].filter(
    (otherCard) => otherCard !== card,
  );

  await Promise.all([
    ...openCards.map((otherCard) => animateContent(otherCard, false)),
    animateContent(card, true),
  ]);
}

document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-week-card]");

  if (!card) return;

  const interactiveElement = event.target.closest(
    "a, button, input, select, textarea, label, iframe, [contenteditable], [role='button']",
  );

  if (interactiveElement && !event.target.closest("summary")) return;

  event.preventDefault();
  setOpenCard(card);
});
