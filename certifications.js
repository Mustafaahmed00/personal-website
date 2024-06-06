document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".certification-card");
    let delay = 0;
    cards.forEach(card => {
        setTimeout(() => {
            card.classList.add("show");
        }, delay);
        delay += 300; // 300ms delay between each card
    });
});
