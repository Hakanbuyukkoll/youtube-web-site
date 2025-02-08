document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.animate-text');
    const text = title.textContent;
    title.textContent = '';
    
    let index = 0;
    const typeEffect = setInterval(() => {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typeEffect);
            fadeInElements();
        }
    }, 100);
});

function fadeInElements() {
    const quote = document.querySelector('.quote');
    const musicBars = document.querySelector('.music-bars');
    
    quote.style.opacity = '0';
    musicBars.style.opacity = '0';
    
    setTimeout(() => {
        quote.style.transition = 'opacity 1s ease';
        quote.style.opacity = '0.7';
        
        setTimeout(() => {
            musicBars.style.transition = 'opacity 1s ease';
            musicBars.style.opacity = '1';
        }, 500);
    }, 500);
} 