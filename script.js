
const botao = document.querySelector('#botao');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
     fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
         const imagem = document.querySelector('#imagem1');
         const nomeDoPersonagem = document.querySelector('#nome1');
         const especie = document.querySelector('#especie1');
         const condicao = document.querySelector('#status1');
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });

   numeroAleatorio = gerarValorAleatorio();
     fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
         const imagem2 = document.querySelector('#imagem2');
         const nomeDoPersonagem2 = document.querySelector('#nome2');
         const especie2 = document.querySelector('#especie2');
         const condicao2 = document.querySelector('#status2');
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = data.status;
    });

    numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
         const imagem3 = document.querySelector('#imagem3');
         const nomeDoPersonagem3 = document.querySelector('#nome3');
         const especie3 = document.querySelector('#especie3');
         const condicao3 = document.querySelector('#status3');
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        condicao3.innerHTML = data.status;
    });


}

botao.onclick = pegarPersonagem;