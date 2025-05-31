 // Fruit data
        const fruits = [
            { name: "Apple", price: "$1.99", image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { name: "Banana", price: "$0.99", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { name: "Orange", price: "$2.49", image: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { name: "Strawberry", price: "$3.99", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { name: "Grapes", price: "$4.49", image: "grape.jpg" },
            { name: "Tangerine", price: "$5.99", image: "tangerine.jpg" },
            { name: "Pomegranate", price: "$3.49", image: "pomgeranate.jpg" },
            { name: "Plum", price: "$2.99", image: "plum.jpg" },
            { name: "cherry", price: "$3.19", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
            { name: "Pear", price: "$2.79", image: "pear.jpg" },
            { name: "Lemon", price: "$2.79", image: "limon.jpg" },
            { name: "Onion", price: "$2.79", image: "onion.jpg" },
            { name: "Garlic", price: "$2.79", image: "garlic.avif" },
            { name: "Melon", price: "$2.79", image: "melon.avif" },
            { name: "WaterMelon", price: "$2.79", image: "watermelon.jpeg" },
            { name: "Plout", price: "$2.79", image: "plout.jpg" },
        ];

        // Generate fruit cards
        const fruitGrid = document.querySelector('.fruit-grid');
        
        fruits.forEach(fruit => {
            const fruitCard = document.createElement('div');
            fruitCard.className = 'fruit-card slide-up';
            fruitCard.innerHTML = `
                <img src="${fruit.image}" alt="${fruit.name}" class="fruit-img">
                <div class="fruit-info">
                    <div class="fruit-name">${fruit.name}</div>
                </div>
            `;
            fruitGrid.appendChild(fruitCard);
        });

        // Mobile navigation toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('nav ul');
        
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                }
            });
        });

        // Add to cart functionality
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartNotification = document.querySelector('.cart-notification');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Show notification
                cartNotification.classList.add('show');
                
                // Hide after 3 seconds
                setTimeout(() => {
                    cartNotification.classList.remove('show');
                }, 3000);
            });
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('nav a, .footer-links a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Current year for copyright
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.slide-up');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animated elements
        document.querySelectorAll('.slide-up').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
 
