alert(" *** BEM-VINDO AO COMEX ***");

var cabecalho = " <h1> >> COMEX << </h1> <hr> "


var Titulo1 = "1. Visão do Produto";
var Titulo2 = "2. Entidades Importantes";
var Titulo3 = "3. Requisitos não funcionais";
var Titulo4 = "4. Requisitos funcionais";

var conteudo1 = " <h2> 1. Visão do Produto </h2> <p> O projeto <strong> Comex </strong> é um sistema de e-commerce marketplace. Seu objetivo é permitir que a sua base de clientes tenha acesso a vários vendedores e, assim, consolidar-se como o shopping eletrônico mais popular da internet.</p>"
var conteudo2 = " <h2> 2. Entidades Importantes </h2>" +
    "<ul>" +
    "<li> <strong> Produto </strong> </li>" +
    "<li> <strong> Categoria </strong> </li>" +
    "<li> <strong> Cliente </strong> </li>" +
    "<li> <strong> Pedido </strong> </li>" +
    "<li> <strong> Item De Pedido </strong> </li>" +
    "</ul>"
var conteudo3 = " <h2> 3. Requisitos não funcionais </h2>" +
    "<ul>" +
    "<li> <strong> Manutenibilidade </strong></li>" +
    "</ul>"
var conteudo4 = "<h2> 4. Requisitos funcionais </h2>" +
    "<p> Os requisitos funcionais são classificados em três categorias no Comex:<br><br>" +
    "<strong> Essencial: </strong> implementação obrigatória para o sistema atingir seu objetivo principal;<br><br>" +
    "<strong> Importante: </strong> acrescentam muito valor ao negócio;<br><br>" +
    " <strong> Desejável: </strong> incrementam usabilidade e funcionalidades.<br><br>" +
    "</p>" +
    "<hr>"

function mostrarCabecalho(cabecalho) {
    document.write(cabecalho)
}


function mostrarConteudo(conteudo) {
    document.write(conteudo)
}

function linha() {
    document.write("<hr>")
}

function rodape() {
    document.write("<h2> .:: <strong> Alura LEVEL UP </strong> ::. </h2>")
}

linha()

mostrarCabecalho(cabecalho);
mostrarConteudo(conteudo1);
mostrarConteudo(conteudo2);
mostrarConteudo(conteudo3);
mostrarConteudo(conteudo4);
rodape();
