const openModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');
const cultForm = document.querySelector('.cult-form');
const toggleBtn = document.getElementById('toggle-btn');
const orionLikes = document.getElementById('Orion-likes');

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