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

function listaDeClientes(nome, mes, ano) {
    document.write(
        "<ul>" +
        "<li>Nome : " + nome + "</li> <br>" +
        "<li>Mês de Nascimento : " + mes + "</li> <br>" +
        "<li>Ano de Nascimento : " + ano + "</li> <br>" +
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
var nome1 = "Fulano";
var nome2 = "Beltrano";
var nome3 = "Ciclano";
var mesNascimento1 = "Fevereiro";
var mesNascimento2 = "Maio";
var mesNascimento3 = "Novembro";
var anoNascimento1 = 1980;
var anoNascimento2 = 1981;
var anoNascimento3 = 1984;

let idade1 = anoAtual - anoNascimento1;
let idade2 = anoAtual - anoNascimento2;
let idade3 = anoAtual - anoNascimento3;
let somaIdades = somaDasIdades()
let media = mediaDasIdades()

cabecalho(title);
cabecalho(title2);
align();
subTitle(1);
listaDeClientes(nome1, mesNascimento1, anoNascimento1);
align();
subTitle(2);
listaDeClientes(nome2, mesNascimento2, anoNascimento2);
align();
subTitle(3)
listaDeClientes(nome3, mesNascimento3, anoNascimento3);
align();
conteudo(" *** Estatística *** ");
espaçoLinha();
conteudo("A soma das idades é : " + somaIdades);
espaçoLinha();
conteudo("A média das idades é : " + media.toFixed(0));
align();
rodape();