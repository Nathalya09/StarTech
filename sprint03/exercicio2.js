
var nomesRegistrados = []
var contador = 0;

console.log()

function registrosDeUsuario(){

var nome = document.getElementById("nome").value;

    if (nome.trim() === "") {
    alert("Por favor, insira um nome");
    } else {
        if (nomesRegistrados.some(usuario => usuario.nome === nome)){
            alert("Nome já registrado!")
        } else {
        contador ++;
        nomesRegistrados.push({ codigo: contador, nome: nome });
        alert (nome + " Registrado com sucesso!")
    }
    } 
    }

function exibirNomes(){
    var nomesLista = document.getElementById("categorias");
    nomesLista.innerHTML = ""; 

for (var i = 0 ;i < nomesRegistrados.length; i++){
    var li = document.createElement("li");
    var usuario = nomesRegistrados[i];
    li.appendChild(document.createTextNode(`Código ${usuario.codigo}`));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(`Nome: ${usuario.nome}`))
    li.appendChild(document.createElement("hr"))

    nomesLista.appendChild(li);
} 
}

var botaoCriar = document.getElementById("criarButton");
botaoCriar.onclick = cadastrodeusuario;

var botaoExibirLista = document.getElementById("botaoExibirLista");
botaoExibirLista.onclick = exibirNomes;