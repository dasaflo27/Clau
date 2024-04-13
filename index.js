const pregunta = document.querySelector('p');
const imagen = document.querySelector('img');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const audio = document.getElementById('audio');

yesBtn.addEventListener('click', function () {
    pregunta.textContent = '¿Ves que sí eres la niña más guapa del mundo?';
    imagen.src = 'otra-imagen.jpg';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    audio.play();
    noBtn.classList.remove('mostrar'); 
});

noBtn.addEventListener('click', function () {
    pregunta.textContent = '¿Quién es la niña más linda del mundo?';
    imagen.src = 'imagen.jpg';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    noBtn.classList.remove('mostrar');
});

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
    noBtn.classList.add('mostrar');
});
