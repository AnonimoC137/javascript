//para clicar nos links internos do menu e ir direto para sessão correspondente
function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo');
    
    if (tabContent.length && tabMenu.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
        
            });
        });
    }
}
initTabNav();

//efeito de clique nas respostas das perguntas do FAQ
function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
    
}
initAccordion();

//scroll suave ao rolar
function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    if (linksInternos.length) {
        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            
            //forma alternativa
            //const topo = section.offsetTop;
            //window.scrollTo({
            //    top: topo,
            //    behavior: 'smooth',
            //});
        
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        
        }
        
        linksInternos.forEach((link) => {
            link.addEventListener('click', scrollToSection)
        });
    }
    
}
initScrollSuave();

//animação scroll
function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');

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





    
