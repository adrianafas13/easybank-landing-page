const btnHamburguer = document.querySelector('#btnHamburguer');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburguer.addEventListener('click', function(){
    console.log('click hamburguer');

    if(header.classList.contains('open')){//close mobile menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    else{ //open mobile menu
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});