// AI Chat Widget and Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Chat Widget Functionality
    const chatBubble = document.getElementById('chatBubble');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatBody = document.querySelector('.chat-body');

    if (chatBubble) {
        chatBubble.addEventListener('click', function() {
            chatWindow.style.display = 'flex';
            chatBubble.style.display = 'none';
            chatInput.focus();
        });
    }

    if (closeChat) {
        closeChat.addEventListener('click', function() {
            chatWindow.style.display = 'none';
            chatBubble.style.display = 'flex';
        });
    }

    function addMessage(message, isBot = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isBot ? 'bot' : 'user'}`;
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function handleMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, false);
        chatInput.value = '';

        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "Thank you for your question! For detailed information about our commercial roofing services, please call us at 586-739-1148 or submit a contact form.",
                "I'd be happy to help! Our team specializes in all types of commercial roofing. Would you like to schedule a free consultation?",
                "Great question! For the most accurate information specific to your roofing needs, I recommend speaking with one of our experts at 586-739-1148.",
                "We offer 24/7 emergency service! If you have an urgent roofing issue, please call 586-739-1148 immediately.",
                "Our experience includes EPDM, TPO, PVC, Built-Up, Modified, Metal, and Green Roof systems. Which system are you interested in learning more about?"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, true);
        }, 1000);
    }

    if (sendMessage) {
        sendMessage.addEventListener('click', handleMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleMessage();
            }
        });
    }

    // Smooth scroll for anchor links
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

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and features
    document.querySelectorAll('.service-card, .feature, .cert-logo').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const navbar = document.querySelector('.navbar');
        if (window.innerWidth <= 968) {
            // Add mobile menu functionality here if needed
            console.log('Mobile view detected');
        }
    };

    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();

    // Form validation for contact forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#dc2626';
                } else {
                    input.style.borderColor = '#cbd5e1';
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });

    // Add active state to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || link.getAttribute('href') === `../${currentPage}`) {
            link.style.color = 'var(--primary-blue)';
            link.style.fontWeight = '700';
        }
    });
});
