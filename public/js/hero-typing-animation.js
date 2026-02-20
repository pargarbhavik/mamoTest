// Hero Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    const heroRotateText = document.getElementById('hero-rotate-text');
    
    if (!typedTextSpan) return;
    
    // Words to type with their corresponding second line text
    const textArray = [
        { typed: 'Unlimited', rotate: 'Digital Transformation' },
        { typed: 'Scalable', rotate: 'Intelligent Software' },
        { typed: 'Innovative', rotate: 'Custom Solutions' },
        { typed: 'Powerful', rotate: 'Business Growth' }
    ];
    
    const typingDelay = 150;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].typed.length) {
            if (!cursorSpan.classList.contains('typing')) {
                cursorSpan.classList.add('typing');
            }
            typedTextSpan.textContent += textArray[textArrayIndex].typed.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains('typing')) {
                cursorSpan.classList.add('typing');
            }
            typedTextSpan.textContent = textArray[textArrayIndex].typed.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            // Update the second line text
            if (heroRotateText) {
                heroRotateText.textContent = textArray[textArrayIndex].rotate;
            }
            setTimeout(type, typingDelay + 500);
        }
    }
    
    // Initialize with first text
    if (heroRotateText) {
        heroRotateText.textContent = textArray[0].rotate;
    }
    
    // Start typing animation after a short delay
    setTimeout(type, newTextDelay);
});
