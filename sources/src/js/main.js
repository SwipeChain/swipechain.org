document.addEventListener('DOMContentLoaded', function (event) {
    headerMenu();
    anchorScroll();
});

function headerMenu() {
    let burgerBtn = document.querySelector('.js-header-burger');
    let menu = document.querySelector('.header-menu');
    burgerBtn.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            menu.classList.remove('active');
        } else {
            this.classList.add('active');
            menu.classList.add('active');
        }
    });
}

function anchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').length > 1) {
                if (document.querySelector(this.getAttribute('href'))) {
                    e.preventDefault();
                    document
                        .querySelector(this.getAttribute('href'))
                        .scrollIntoView({
                            behavior: 'smooth',
                        });
                }
            }
        });
    });
}
