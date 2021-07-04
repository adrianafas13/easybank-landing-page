const btnHamburguer = document.querySelector('#btnHamburguer');

btnHamburguer.addEventListener('click', function(){
    console.log('click hamburguer');

    if(btnHamburguer.classList.contains('open')){
        btnHamburguer.classList.remove('open');
    }
    else{
        btnHamburguer.classList.add('open');
    }
});