
function initMenu() {
    const menu = document.querySelector('.menu-mobile');

    class MobileNavbar {
        constructor(mobileMenu, navList, navLinks) {
            this.mobileMenu = document.querySelector(mobileMenu);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = 'active';
            
            this.handleClick = this.handleClick.bind(this);
            
            
            
        }
    
        animateLinks() {
            this.navLinks.forEach((link,index) =>{
                link.style.animation?(link.style.animation = ''):(link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
            });
            
            
        }
    
        handleClick() {
            this.navList.classList.toggle(this.activeClass);
            
            this.animateLinks();
           
            
        }
    
        addClickEvent() {
            this.mobileMenu.addEventListener('click', this.handleClick);
            
            
            
        }
    
        init() {
            if (this.mobileMenu) {
                this.addClickEvent();
            }
            return this;
        }
    }
    const mobileNavbar = new MobileNavbar(
        '.mobile-menu',
        '.nav-list',
        '.nav-list li',
    
    );
    mobileNavbar.init();
}

initMenu()

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;
    
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo');
                }
            });
        }
        
        window.addEventListener('scroll', animaScroll);
        
        animaScroll();
    }
}

initAnimacaoScroll();
