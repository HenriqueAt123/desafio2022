
const botao = document.querySelector('#botao');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
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
}

botao.onclick = pegarPersonagem;