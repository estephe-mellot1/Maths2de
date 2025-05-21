document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.flashcard').forEach(card => {
        card.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });
    });
});