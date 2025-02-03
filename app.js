//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value.trim(); // Removendo espaços extras

    if (amigo === "") {
        alert("Digite o nome de um amigo primeiro!!");
        inputAmigo.focus(); // Mantém o cursor no campo de entrada
        return; // Sai da função para evitar adicionar string vazia
    }

    amigos.push(amigo);
    inputAmigo.value = ""; // Limpa o campo
    inputAmigo.focus(); // Mantém o cursor no campo de entrada

    exibirAmigos();
}

function exibirAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    }
}
// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }

    // Sorteia um amigo aleatório
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe apenas o nome do amigo sorteado
    let resultado = document.getElementById("resultado");
    resultado.textContent = `Amigo sorteado: ${amigoSorteado}`;

    // Remove o amigo sorteado da lista
    amigos = amigos.filter(amigo => amigo !== amigoSorteado);

    // Atualiza a exibição dos amigos (a lista será limpa após o sorteio)
    exibirAmigos();

    // Oculta a lista de amigos
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.style.display = "none";
}
