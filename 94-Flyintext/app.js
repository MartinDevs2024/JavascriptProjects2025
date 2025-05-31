const flyingText = document.querySelector('.fly-in-text');

const flyingLetters = function() {
    setTimeout(() => {
        flyingText.classList.remove('hidden');
    },1000);
}

flyingLetters();