'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.querySelector('.scroll');

    window.addEventListener('scroll', () => {
        const scroll = document.documentElement.scrollTop;

        if (scroll >= 1500) {
            scrollBtn.classList.remove('hide');
        } else {
            scrollBtn.classList.add('hide');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    const cleanUrls = document.querySelectorAll('.header__item');
    const overlayUrls = document.querySelectorAll('.overlay__item');
    const products = document.querySelectorAll('.cards');
    const burger = document.querySelector('.header__burger');
    const overlay = document.querySelector('.overlay');
    const closeBtn = overlay.querySelector('.overlay__close');
    const html = document.querySelector('html');
    const showMoreLinks = document.querySelectorAll('.product__show');

    function menuLinks(cards, urls, overlayUrls) {
        let offsets = [];

        cards.forEach(prod => {
            offsets.push(prod.offsetTop);
        });

        urls.forEach((url, i) => {
            url.addEventListener('click', () => {
                window.scrollTo({
                    top: offsets[i],
                    left: 0,
                    behavior: 'smooth'
                });
            });
        });

        overlayUrls.forEach((url, i) => {
            url.addEventListener('click', () => {
                window.scrollTo({
                    top: offsets[i],
                    left: 0,
                    behavior: 'smooth'
                });
            });
        });
    }

    menuLinks(products, cleanUrls, overlayUrls);

    window.addEventListener('resize', () => {
        menuLinks(products, cleanUrls, overlayUrls);
    });

    burger.addEventListener('click', function() {
        html.classList.add('preventScroll');
        this.classList.add('rotateBurger');
        overlay.classList.remove('hide');
    });  

    overlay.addEventListener('click', (e) => {
        const target = e.target;
        if (target === overlay || target === closeBtn || target === overlay.querySelector('path') || target === overlay.querySelector('svg')) {
            html.classList.remove('preventScroll');
            burger.classList.remove('rotateBurger');
            overlay.classList.add('hide');
        } else {
            html.classList.remove('preventScroll');
            burger.classList.remove('rotateBurger');
            overlay.classList.add('hide');
        }
    });

    showMoreLinks.forEach(url => {
        url.addEventListener('click', function() {
            const items = this.parentNode.querySelector('.product__items');
            const chevron = this.querySelector('svg');

            if (chevron.style.transform == 'rotate(90deg)' || chevron.style.transform == '') {
                chevron.style.transform = 'rotate(270deg)';
                items.style.display = 'block';
                setTimeout(() => items.style.opacity = 1, 50);
            } else {
                chevron.style.transform = 'rotate(90deg)';
                items.style.opacity = 0;
                setTimeout(() => items.style.display = 'none', 330);
            }
            menuLinks(products, cleanUrls, overlayUrls);
        });
    });
}) 