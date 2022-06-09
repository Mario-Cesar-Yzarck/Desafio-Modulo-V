const html = document.querySelector('html');
const checkbox = document.querySelector('#checkbox');
const imgHome = document.getElementById('img-home');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

const name = document.getElementById('name');
const email = document.getElementById('email');
const birthday = document.getElementById('birthday');
const note = document.getElementById('note');
const msg = document.getElementById('msg');
const btnSubmit = document.getElementById('btn-submit');

checkbox.addEventListener('change', e => {    
    html.classList.toggle('dark-mode')
})

let counter = 0;

function changeImg() {
    counter++;

    if(counter > 3) {
        counter = 1;
    }

    if(counter === 1) {
        img1.style.zIndex = "1";
        img2.style.zIndex = "0";
        img3.style.zIndex = "0";
        return;
    } else if(counter === 2) {
        img2.style.zIndex = "1";
        img3.style.zIndex = "0";
        img1.style.zIndex = "0";
        return
    } else {
        img3.style.zIndex = "1";
        img2.style.zIndex = "0";
        img1.style.zIndex = "0";
        return;
    }    
}

btnSubmit.addEventListener('click', e => {
    e.preventDefault()
    if(!name.value && !email.value) {
        alert(`Preencha os campos obrigatórios. 
        Nome e E-mail.`)
        return
    }
    let questOne = document.querySelector('input[name="quest-one"]:checked').value;
    let questTwo = document.querySelector('input[name="quest-two"]:checked').value;
    
    alert(`Obrigado por responder o formulário.
    Suas respostas foram:
    Nome: ${name.value}
    E-mail: ${email.value}
    Data de nascimento: ${birthday.value.split('').reverse().join('')}
    Nota: ${note.value}
    Resposta um: ${questOne}
    Resposta dois: ${questTwo}
    Mensagem: ${msg.value}`)

    name.value = '';
    email.value = '';
    birthday.value = '';
    note.value = '';
    msg.value = '';
})

setInterval(changeImg, 5000)