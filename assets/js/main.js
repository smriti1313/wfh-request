/**
 * Main JavaScript File
 * WFH Request Project
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get elements
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const question = document.getElementById('question');
    const celebration = document.getElementById('celebration');

    /**
     * Move the NO button when mouse gets close to it
     * Makes it impossible to click - moves across entire page
     */
    let isMoving = false;

    // Track mouse position
    document.addEventListener('mousemove', function(e) {
        if (isMoving) return;
        
        const noBtnRect = noBtn.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculate distance from mouse to button center
        const btnCenterX = noBtnRect.left + noBtnRect.width / 2;
        const btnCenterY = noBtnRect.top + noBtnRect.height / 2;
        const distance = Math.sqrt(
            Math.pow(mouseX - btnCenterX, 2) + 
            Math.pow(mouseY - btnCenterY, 2)
        );
        
        // If mouse is within 100px, move the button
        if (distance < 50) {
            moveButton();
        }
    });

    function moveButton() {
        isMoving = true;
        
        // Get window dimensions
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;
        
        // Generate random position anywhere on screen (with padding)
        const randomX = Math.random() * (windowWidth - btnWidth - 40) + 20;
        const randomY = Math.random() * (windowHeight - btnHeight - 40) + 20;
        
        // Make button fixed position to move across entire page
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.transition = 'all 0.15s ease-out'; // Faster transition
        
        // Allow moving again after animation
        setTimeout(() => {
            isMoving = false;
        }, 150);
    }

    /**
     * Show celebration when YES is clicked
     */
    yesBtn.addEventListener('click', function() {
        // Hide question
        question.style.display = 'none';
        
        // Show celebration
        celebration.classList.add('show');
        
        // Create confetti effect
        createConfettiEffect();
    });

    /**
     * Create confetti animation
     */
    function createConfettiEffect() {
        const confettiCount = 50;
        
        for(let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                createConfetti();
            }, i * 30);
        }
    }

    /**
     * Create single confetti piece
     */
    function createConfetti() {
        const confetti = document.createElement('div');
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        
        // Style confetti
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        // Animate falling
        let pos = -10;
        const fallSpeed = 2 + Math.random() * 3;
        const drift = (Math.random() - 0.5) * 2;
        let leftPos = parseFloat(confetti.style.left);
        
        const interval = setInterval(() => {
            pos += fallSpeed;
            leftPos += drift;
            confetti.style.top = pos + 'px';
            confetti.style.left = leftPos + 'px';
            
            // Remove when off screen
            if(pos > window.innerHeight) {
                clearInterval(interval);
                confetti.remove();
            }
        }, 20);
    }

});