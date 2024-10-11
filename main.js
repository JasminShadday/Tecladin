function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    //elemento != null
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }

    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

//const variável que uma vez definida, não pode ser mudada
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];//segunda classe de cada tecla
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    //na tecla para baixo (apertada), o evento chega até a função onkeydown e traz informações da tecla que foi pressionada 
    tecla.onkeydown = function (evento) {
        //o evento guarda qual tecla do teclado foi pressionada, conseguimos acessar atrvés do evento.code
        console.log(evento.code === 'Enter')

        if (evento.code === 'Enter') {
            tecla.classList.add('ativa');

        }
    }

    //na tecla para cima (desapertada), remove a classe ativa
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}   
