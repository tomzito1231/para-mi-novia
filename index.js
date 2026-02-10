const btnSi = document.querySelector('.botones__btn-si');
const btnNo = document.querySelector('.botones__btn-no');
const randomPic = document.querySelector('.random-pics__cats');
const question = document.querySelector('.question');

const musica = new Audio('./assets/musica/Manu Chao - Me gustas tu.mp3');

// SI
btnSi.addEventListener('click', () => {
    randomPic.src = './assets/0.jpg';
    question.innerText = 'EEETSO MAMONAAAA 💖 Te amo ❤️';
    question.classList.add('question-style');

    btnSi.style.display = 'none';
    btnNo.style.display = 'none';

    musica.play();
});

// NO
let contador = 0;

btnNo.addEventListener('click', () => {
    const fotos = ['2','3','4','5','6'];

    if (contador < fotos.length) {
        randomPic.src = `./assets/fotos/${fotos[contador]}.jpg`;
        btnSi.classList.add(`estilo-${contador + 1}`);
    }

    const textos = [
        '¿Segura?',
        '¿Segurísima?',
        '-_- :( ?',
        'OUUU',
        'YACHAOMAVARA 💔'
    ];

    btnNo.innerText = textos[contador] || btnNo.innerText;
    contador++;
});





