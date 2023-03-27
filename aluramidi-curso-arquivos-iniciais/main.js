function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocaSom

// nao necessario usar funcao se usado For ao inves de While (let contador = 0)

for (let contador =0;contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]

    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    //nao mais utilizado -> contador = contador + 1; popis for ja atribui
    //console.log(contador);
}

