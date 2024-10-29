// JavaScript для динамічного контенту та інтерактивних елементів
document.addEventListener("DOMContentLoaded", function() {
    console.log("Сайт завантажено!");
    
    const banners = document.querySelectorAll('.banner');
    banners.forEach(banner => {
        banner.addEventListener('mouseover', () => {
            banner.style.transform = 'scale(1.05)';
            banner.style.transition = 'transform 0.3s ease-in-out';
        });
        banner.addEventListener('mouseout', () => {
            banner.style.transform = 'scale(1)';
        });
    });

    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.style.transition = 'color 0.5s ease-in-out';
        heading.addEventListener('mouseover', () => {
            heading.style.color = '#ff0000';
        });
        heading.addEventListener('mouseout', () => {
            heading.style.color = 'red';
        });
    });
    
// Форма і обробка події відправки
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Запобігаємо стандартному відправленню форми

        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/submit_form.php', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById('response').innerHTML = response.response;
            } else {
                document.getElementById('response').innerHTML = "Сталася помилка при відправці форми.";
            }
        };

        xhr.send(formData);
    });
    
    // Модальне вікно
    const modal = document.getElementById("contact-modal");

    // Відкриття модального вікна
    window.openModal = function() {
        modal.style.display = "block";
    }

    // Закриття модального вікна
    window.closeModal = function() {
        modal.style.display = "none";
    }

    // Закриття модального вікна при кліку за межами
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});