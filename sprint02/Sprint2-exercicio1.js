function cabecalho(titulo) {
    document.write(titulo)
}

function align() {
    document.write("<hr>")
}

function espaçoLinha() {
    document.write("<br>")
}

function subTitle(codigo) {
    document.write("<h3> - Código : " + codigo + "</h3>")
}

function listaDeClientes(nome, mes, ano, tempoDeVida) {
    document.write(
        "<ul>" +
        "<li>Nome : " + nome + "</li> <br>" +
        "<li>Mês de Nascimento : " + mes + "</li> <br>" +
        "<li>Ano de Nascimento : " + ano + "</li> <br>" +
        "<li>Característica Etária : " + tempoDeVida + "</li>" +
        "</ul>")
}

function somaDasIdades() {
    let soma = idade1 + idade2 + idade3
    return soma
}

function mediaDasIdades() {
    let media = ((idade1 + idade2 + idade3) / 3)
    return media
}

function conteudo(content) {
    document.write(content)
}

function rodape() {
    document.write("<h2> .:: <strong> Alura LEVEL UP </strong> ::. </h2>");
}

let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();

var title = "<h1> >> COMEX << </h1>";
var title2 = "<h2> ::Lista de Clientes:: </h2>";

cabecalho(title);
cabecalho(title2);
align();

let idade1 = anoAtual - anoNiver;
let idade2 = anoAtual - anoNiver;
let idade3 = anoAtual - anoNiver;
let somaDasIdadesTeste = somaDasIdades();
let mediaDasIdadesTeste = mediaDasIdades();
let anoRecente = parseInt(prompt(" Digite o ano atual : "));

var teste1 = parseInt(prompt("Quantidade de clientes : "));

for (let teste = 0; teste < teste1; teste++) {
    var nomeCliente = prompt("Escolha um nome : ");
    var mesNiver = prompt("Insira seu mês de nascimento : ");
    var anoNiver = prompt("Insira agora o seu ano de nascimento : ");
    var tempoDeVida;
    var vida = anoAtual - anoNiver;
    if (vida <= 17) {

        tempoDeVida = "Adolescente"

    } else if (vida >= 18 && vida <= 29) {

        tempoDeVida = "Jovem"

    } else if (vida >= 30 && vida <= 59) {

        tempoDeVida = "Adulto"

    } else if (vida >= 60) {

        tempoDeVida = "Idoso"

    }

    subTitle(1 + teste);
    listaDeClientes(nomeCliente, mesNiver, anoNiver, tempoDeVida);
    align();
    
}

conteudo(" *** Estatística *** ");
espaçoLinha();
conteudo("A soma das idades é : " + somaDasIdadesTeste);
espaçoLinha();
conteudo("A média das idades é : " + mediaDasIdadesTeste.toFixed(0));
rodape();