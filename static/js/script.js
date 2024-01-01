document.addEventListener('DOMContentLoaded', function () {
    home.classList.add('active');
    const menuItems = document.querySelectorAll('.nav-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(innerItem => innerItem.classList.remove('active'));
            this.classList.add('active');

            // Add animation class
            this.querySelector('.nav-link').classList.add('animate');
        });
    });
});

    

