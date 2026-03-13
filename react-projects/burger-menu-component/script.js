document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const menuItems = document.querySelector('.menu-items');

    burgerBtn.addEventListener('click', function() {
        menuItems.classList.toggle('menu-active');
    });
});