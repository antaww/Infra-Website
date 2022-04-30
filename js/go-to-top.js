const goToTop = document.querySelector('#go-to-top');

function updateGoToTopButton() {
    if (window.scrollY > 200) {
        goToTop.classList.add('show');
        goToTop.classList.remove('hide');
    } else {
        goToTop.classList.add('hide');
        goToTop.classList.remove('show');
    }
}

window.addEventListener('load', () => {
    updateGoToTopButton();

    goToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        updateGoToTopButton();
    });

});