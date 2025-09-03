// script.js

// Scroll suave para links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Validação básica de formulário
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
  form.reset();
});
