/*
const html = document.querySelector('html');
const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', e => {    
    html.classList.toggle('dark-mode')
})
*/

const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')

console.log(img1)
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

setInterval(changeImg, 5000)