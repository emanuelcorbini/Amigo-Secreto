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
