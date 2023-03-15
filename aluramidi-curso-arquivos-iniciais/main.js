function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocaSom

let contador = 0

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]

    const instrumento = tecla.classList[1];
    //template
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    contador = contador + 1;
    console.log(contador);
}