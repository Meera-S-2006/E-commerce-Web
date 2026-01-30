
    const mobileMenu = document.getElementById('mobile-menu');
    const openMenuBtn = document.getElementById('open-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    
    openMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    closeMenuBtn.addEventListener('click', () => {
      closeMobileMenu();
    });
    
    function closeMobileMenu() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
    
   
    document.addEventListener('DOMContentLoaded', function() {
      const themeToggle = document.getElementById('theme-toggle');
      const html = document.documentElement;
      
      const savedTheme = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        html.classList.add('dark');
      }
      
      if (themeToggle) {
        themeToggle.addEventListener('click', function() {
          html.classList.toggle('dark');
          localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
      }
    });
    
    
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        header.classList.add('glass');
        header.style.boxShadow = '0 4px 20px hsla(340, 85%, 60%, 0.1)';
      } else {
        header.classList.remove('glass');
        header.style.boxShadow = 'none';
      }
    });
    
    
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = `${progress}%`;
    });
    
    
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealOnScroll = () => {
      revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 80) {
          el.classList.add('active');
        }
      });
    };
    
    revealOnScroll();
    
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          revealOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
    
    
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('liked');
        const svg = this.querySelector('svg path');
        if (this.classList.contains('liked')) {
          svg.setAttribute('fill', 'currentColor');
        } else {
          svg.setAttribute('fill', 'none');
        }
      });
    });
    
    
    
