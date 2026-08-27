const openModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');
const cultForm = document.querySelector('.cult-form');
const toggleBtn = document.getElementById('toggle-btn');
const orionLikes = document.getElementById('Orion-likes');
const accordionItems = document.querySelectorAll('.accordion-item');
const track = document.getElementById('carouselTrack');
const slides = track.children;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;



openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
})

cultForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('Por favor ingresa un correo electrónico válido.');
        return;
    }
    cultForm.reset();
    modal.classList.remove('modal--show');
})

toggleBtn.addEventListener('click', () => {
    orionLikes.classList.toggle('hidden');
});

accordionItems.forEach(item => {

    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {

        const isActive = item.classList.contains('active');

        accordionItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.accordion-content').style.maxHeight = null;
        });

        if (!isActive) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {

    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});