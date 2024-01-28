document.addEventListener('DOMContentLoaded', function () {
    home.classList.add('active');

    var targetElement = document.querySelector('.goto');

    // Check if the target element is found
    if (targetElement) {
        // Scroll to the target element
        targetElement.scrollIntoView();
    }

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

window.onload = function() {
    // Scroll to the top of the page
    window.scroll(0, 0);

    
};
