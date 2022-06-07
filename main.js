const html = document.querySelector('html');
const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', e => {    
    html.classList.toggle('dark-mode')
})