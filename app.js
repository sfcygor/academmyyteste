document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('js-loaded');

    // Animação de Fade-In para seções
    const fadeInElements = document.querySelectorAll('.js-fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

    // Lógica para a Galeria de Rolagem Infinita
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    // Lógica para a Grade de Horários com Abas (Tabs)
    const tabs = document.querySelectorAll('.schedule-tab');
    const panels = document.querySelectorAll('.schedule-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Desativa todas as abas e painéis
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            panels.forEach(p => {
                p.classList.remove('active');
            });

            // Ativa a aba e o painel clicado
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            const targetPanelId = tab.getAttribute('aria-controls');
            const targetPanel = document.getElementById(targetPanelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});