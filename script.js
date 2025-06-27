// Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remove loading screen from DOM after animation
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.portfolio-item, .service-card, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Navbar background on scroll - Make header rectangular and floating
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY <= 50) {
        navbar.classList.remove('scrolled');
        navbar.style.background = 'transparent';
        navbar.style.border = '1px solid transparent';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.classList.add('scrolled');
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    }
});

// Form submission
const contactForm = document.querySelector('.form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const projectType = contactForm.querySelector('input[placeholder="Project Type"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !projectType || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Particle animation enhancement
function enhanceParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        // Add random movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + index * 500);
    });
}

// Initialize particle enhancement
document.addEventListener('DOMContentLoaded', enhanceParticles);

// Add hover effects to portfolio items
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const titleName = document.querySelector('.title-name');
    if (titleName) {
        const originalText = titleName.textContent;
        setTimeout(() => {
            typeWriter(titleName, originalText, 150);
        }, 1000);
    }
});

// Add parallax effect to background elements (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.blur-circle');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Add smooth reveal animation for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize section reveal
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});

// Color Decoder Game
class ColorDecoderGame {
    constructor() {
        this.colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
        this.colorMap = {
            red: '#ff4757',
            blue: '#3742fa',
            green: '#2ed573',
            yellow: '#ffa502',
            purple: '#a55eea',
            orange: '#ff6b35'
        };
        this.secretCode = [];
        this.currentGuess = [];
        this.attempts = 0;
        this.maxAttempts = 7;
        this.gameActive = false;
        
        this.initializeGame();
        this.bindEvents();
    }
    
    initializeGame() {
        this.generateSecretCode();
        this.gameActive = true;
        this.updateDisplay();
        this.updateSubmitButton();
    }
    
    generateSecretCode() {
        this.secretCode = [];
        for (let i = 0; i < 4; i++) {
            const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
            this.secretCode.push(randomColor);
        }
        console.log('Secret code:', this.secretCode); // For debugging
    }
    
    bindEvents() {
        // Color selection
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', (e) => {
                if (!this.gameActive) return;
                this.selectColor(e.target.dataset.color);
            });
        });
        
        // Game controls
        document.getElementById('new-game-btn').addEventListener('click', () => {
            this.newGame();
        });
        
        document.getElementById('submit-guess').addEventListener('click', () => {
            this.submitGuess();
        });
        
        document.getElementById('clear-guess').addEventListener('click', () => {
            this.clearGuess();
        });
        
        // Guide modal
        document.getElementById('guide-btn').addEventListener('click', () => {
            this.openGuide();
        });
        
        document.getElementById('close-modal').addEventListener('click', () => {
            this.closeGuide();
        });
        
        // Close modal when clicking outside
        document.getElementById('guide-modal').addEventListener('click', (e) => {
            if (e.target.id === 'guide-modal') {
                this.closeGuide();
            }
        });
        
        // Guess pegs
        this.updateGuessPegs();
    }
    
    selectColor(color) {
        if (this.currentGuess.length >= 4) return;
        
        this.currentGuess.push(color);
        this.updateGuessPegs();
        this.updateSubmitButton();
        
        // Update color palette selection
        document.querySelectorAll('.color-option').forEach(option => {
            option.classList.remove('selected');
        });
    }
    
    updateGuessPegs() {
        const guessesContainer = document.getElementById('guesses');
        let currentRow = guessesContainer.querySelector('.guess-row.current');
        
        // If no current row exists, create one
        if (!currentRow) {
            currentRow = this.createGuessRow();
        }
        
        const pegs = currentRow.querySelectorAll('.guess-peg');
        pegs.forEach((peg, index) => {
            if (index < this.currentGuess.length) {
                peg.style.background = this.colorMap[this.currentGuess[index]];
                peg.classList.add('selected');
            } else {
                peg.style.background = 'var(--bg-tertiary)';
                peg.classList.remove('selected');
            }
        });
    }
    
    createGuessRow() {
        const guessesContainer = document.getElementById('guesses');
        const row = document.createElement('div');
        row.className = 'guess-row';
        
        // Add attempt number
        const attemptNumber = document.createElement('div');
        attemptNumber.className = 'guess-number';
        attemptNumber.textContent = this.attempts + 1;
        row.appendChild(attemptNumber);
        
        const pegs = document.createElement('div');
        pegs.className = 'guess-pegs';
        
        for (let i = 0; i < 4; i++) {
            const peg = document.createElement('div');
            peg.className = 'guess-peg';
            peg.dataset.index = i;
            pegs.appendChild(peg);
        }
        
        const feedback = document.createElement('div');
        feedback.className = 'feedback';
        
        row.appendChild(pegs);
        row.appendChild(feedback);
        guessesContainer.appendChild(row);
        
        // Add current class to the new row
        row.classList.add('current');
        
        return row;
    }
    
    submitGuess() {
        if (this.currentGuess.length !== 4 || !this.gameActive) return;
        
        const feedback = this.checkGuess(this.currentGuess);
        this.displayFeedback(feedback);
        
        // Remove current class from the submitted row
        const currentRow = document.querySelector('.guess-row.current');
        if (currentRow) {
            currentRow.classList.remove('current');
        }
        
        this.attempts++;
        this.updateDisplay();
        
        if (feedback.correct === 4) {
            this.endGame(true);
        } else if (this.attempts >= this.maxAttempts) {
            this.endGame(false);
        } else {
            this.currentGuess = [];
            this.updateGuessPegs();
            this.updateSubmitButton();
        }
    }
    
    checkGuess(guess) {
        let correct = 0;
        let wrongPosition = 0;
        
        // Check for correct positions
        const secretCopy = [...this.secretCode];
        const guessCopy = [...guess];
        
        // First pass: find exact matches
        for (let i = 0; i < 4; i++) {
            if (guessCopy[i] === secretCopy[i]) {
                correct++;
                secretCopy[i] = null;
                guessCopy[i] = null;
            }
        }
        
        // Second pass: find wrong positions
        for (let i = 0; i < 4; i++) {
            if (guessCopy[i] !== null) {
                const index = secretCopy.indexOf(guessCopy[i]);
                if (index !== -1) {
                    wrongPosition++;
                    secretCopy[index] = null;
                }
            }
        }
        
        return { correct, wrongPosition };
    }
    
    displayFeedback(feedback) {
        const currentRow = document.querySelector('.guess-row:last-child');
        const feedbackContainer = currentRow.querySelector('.feedback');
        feedbackContainer.innerHTML = '';
        
        // Add correct position feedback
        for (let i = 0; i < feedback.correct; i++) {
            const peg = document.createElement('div');
            peg.className = 'feedback-peg correct';
            feedbackContainer.appendChild(peg);
        }
        
        // Add wrong position feedback
        for (let i = 0; i < feedback.wrongPosition; i++) {
            const peg = document.createElement('div');
            peg.className = 'feedback-peg wrong-position';
            feedbackContainer.appendChild(peg);
        }
        
        // Mark the pegs as filled
        const pegs = currentRow.querySelectorAll('.guess-peg');
        pegs.forEach(peg => {
            peg.classList.add('filled');
        });
        
        // Add winning animation if all 4 colors are correct
        if (feedback.correct === 4) {
            currentRow.classList.add('winning');
        }
    }
    
    clearGuess() {
        if (!this.gameActive) {
            // Game is over - start new game
            this.newGame();
        } else {
            // Game is active - clear current guess
            this.currentGuess = [];
            this.updateGuessPegs();
            this.updateSubmitButton();
            
            document.querySelectorAll('.color-option').forEach(option => {
                option.classList.remove('selected');
            });
        }
    }
    
    updateSubmitButton() {
        const submitBtn = document.getElementById('submit-guess');
        const clearBtn = document.getElementById('clear-guess');
        
        if (!this.gameActive) {
            // Game is over - change clear button to new game
            clearBtn.textContent = 'New Game';
            clearBtn.className = 'btn btn-primary';
            submitBtn.disabled = true;
        } else {
            // Game is active - normal state
            clearBtn.textContent = 'Clear';
            clearBtn.className = 'btn btn-secondary';
            submitBtn.disabled = this.currentGuess.length !== 4;
        }
    }
    
    updateDisplay() {
        document.getElementById('attempts').textContent = `${this.attempts}/${this.maxAttempts}`;
        
        if (!this.gameActive) {
            document.getElementById('game-status').textContent = 'Game Over';
        } else {
            document.getElementById('game-status').textContent = 'Ready to play!';
        }
    }
    
    endGame(won) {
        this.gameActive = false;
        this.revealSecretCode();
        
        if (won) {
            document.getElementById('game-status').textContent = 'You Won! 🎉';
            document.getElementById('game-status').style.color = '#2ed573';
        } else {
            document.getElementById('game-status').textContent = 'Game Over! 😔 Auto-restarting in 3s...';
            document.getElementById('game-status').style.color = '#ff4757';
            
            // Auto-restart after 3 seconds when game is lost
            setTimeout(() => {
                this.newGame();
            }, 3000);
        }
        
        this.updateSubmitButton();
    }
    
    revealSecretCode() {
        const secretPegs = document.querySelectorAll('.secret-peg');
        secretPegs.forEach((peg, index) => {
            setTimeout(() => {
                peg.style.background = this.colorMap[this.secretCode[index]];
                peg.classList.add('revealed');
            }, index * 200);
        });
    }
    
    newGame() {
        this.secretCode = [];
        this.currentGuess = [];
        this.attempts = 0;
        this.gameActive = true;
        
        // Clear guesses
        document.getElementById('guesses').innerHTML = '';
        
        // Reset secret code display
        document.querySelectorAll('.secret-peg').forEach(peg => {
            peg.style.background = 'var(--bg-tertiary)';
            peg.classList.remove('revealed');
        });
        
        // Reset status
        document.getElementById('game-status').textContent = 'Ready to play!';
        document.getElementById('game-status').style.color = '';
        
        this.generateSecretCode();
        this.updateDisplay();
        this.updateSubmitButton();
    }
    
    openGuide() {
        const modal = document.getElementById('guide-modal');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    closeGuide() {
        const modal = document.getElementById('guide-modal');
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ColorDecoderGame();
    
    // Add collapsible functionality for game section
    const gameHeader = document.getElementById('game-header');
    const gameContent = document.getElementById('game-content');
    const gameToggleIcon = document.getElementById('game-toggle-icon');
    
    if (gameHeader && gameContent) {
        gameHeader.addEventListener('click', () => {
            gameContent.classList.toggle('active');
            gameToggleIcon.classList.toggle('active');
        });
    }
}); 