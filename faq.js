document.querySelectorAll('.faqbox').forEach(box => {
    box.addEventListener('click', () => {
        const answer = box.querySelector('.faq-answer');
        if (answer) {
            answer.hidden = !answer.hidden;
            const svg = box.querySelector('svg');
           if (answer.hidden) {
               svg.style.transform = 'rotate(0deg)';
            } else {
                 svg.style.transform = 'rotate(90deg)';
            }
        }
    });
});