


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

function listaDeCategorias(categoria, codigoAdicionado) {
    document.write(
        "<ul>" +
        "<li>Código : " + codigoAdicionado + "</li> <br>" +
        "<li>Categoria : " + categoria + "</li> <br>" +
        "</ul>")
}

function conteudo(content) {
    document.write(content);
}

function rodape() {
    document.write("<h2> .:: <strong> Alura LEVEL UP </strong> ::. </h2>");
}

function somaDasIdades() {
    return idadesComplementares;
}

function media(somaFinal, numeroDeClientes) {
    var finalMedia = somaFinal / numeroDeClientes
    return finalMedia
}

function enviar(){
    let categoriaAdicionada = document.getElementById("categoria").value
    console.log(categoriaAdicionada)

    listaDeCategorias(categoriaAdicionada, codigo);
}

var codigo = 1

align();
espaçoLinha();



var idadesComplementares = 0;

// let anoRecente = parseInt(prompt(" Digite o ano atual : "));

// if (anoRecente <= 0) {
//     document.write("Você digitou um valor inválido");
// } else {

//     var quantidadeDeClientes = parseInt(prompt("Quantidade de clientes : "));

//     if (quantidadeDeClientes <= 0) {
//         document.write("Você digitou um valor inválido");

//     } else {

//         for (let teste = 0; teste < quantidadeDeClientes; teste++) {
//             var nomeCliente = prompt("Escolha um nome : ");
//             var mesNiver = prompt("Insira seu mês de nascimento : ");
//             var anoNiver = parseInt(prompt("Insira agora o seu ano de nascimento : "));
//             var tempoDeVida;
//             var vida = anoRecente - anoNiver;


//             console.log("Idade cliente " + teste + " - " + vida);

//             if (vida <= 17) {

//                 tempoDeVida = "Adolescente"

//             } else if (vida >= 18 && vida <= 29) {

//                 tempoDeVida = "Jovem"

//             } else if (vida >= 30 && vida <= 59) {

//                 tempoDeVida = "Adulto"

//             } else if (vida >= 60) {

//                 tempoDeVida = "Idoso"

//             }
//             idadesComplementares = idadesComplementares + vida;
//             subTitle(1 + teste);
//             listaDeClientes(nomeCliente, mesNiver, anoNiver, tempoDeVida);
//             align();

//             var somaIdadesTotal = somaDasIdades()
//             var mediaIdades = media(somaIdadesTotal, quantidadeDeClientes)

//         }

//         

//         cabecalho(title2);
//         conteudo(" *** Estatística *** ");
//         espaçoLinha();
//         conteudo("A soma das idades é : " + somaIdadesTotal);
//         espaçoLinha();
//         conteudo("A média das idades é : " + mediaIdades);
//         rodape();
//     }
// }