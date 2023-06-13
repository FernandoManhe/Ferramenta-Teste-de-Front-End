var teste = "";
var vetorTestes = [];
var stringTestes = "";

function preencheObjeto() {
    var Caso = document.getElementById("txtCaso").value;
    var Entrada = document.getElementById("txtEntrada").value;
    var Resultado = document.getElementById("txtResult").value;
    var ResultadoFinal = document.getElementById("txtResultF").value;

    teste = "<b>• Caso de Teste: </b> " + Caso + "<br><b> • Entrada: </b> " + Entrada + "<br><b> • Resultado Esperado: </b> " + Resultado + "<br><b> • Resultado Final: </b> " + ResultadoFinal + "<br> <br>" ;

    vetorTestes.push(teste);

    limpaTxt();
}

function mostrarTeste() {
    var lblMostrarTeste = document.getElementById("lblMostrarTeste");
    stringTestes = vetorTestes.join("<br>");
    lblMostrarTeste.innerHTML = stringTestes;
}

function limpaTxt() {
    document.getElementById("txtCaso").value = "";
    document.getElementById("txtEntrada").value = "";
    document.getElementById("txtResult").value = "";
    document.getElementById("txtResultF").value = "";
}







// Planejamentos
var planejamento = "";
var vetorPlanejamentos = [];
var stringPlanejamentos = "";

function preencheObjetoo() {
    var Modelo = document.getElementById("txtModelo").value;
    var Introducao = document.getElementById("txtIntroducao").value;
    var Objetivos = document.getElementById("txtObjetivos").value;
    var Estrategia = document.getElementById("txtEstrategia").value;
    var Equipe = document.getElementById("txtEquipe").value;
    var Cronograma = document.getElementById("txtCronograma").value;

    planejamento = "<b>• Modelo: </b> " + Modelo + "<br><b> • Introdução: </b> " + Introducao + "<br><b> • Objetivos: </b> " + Objetivos + "<br><b> • Estratégias: </b> " + Estrategia + "<br><b>• Equipe: </b> " + Equipe + "<br><b>• Cronograma: </b> " + Cronograma + "<br><br>"; 


    vetorPlanejamentos.push(planejamento);

    limpaTxtt();
}

function mostrarPlanejamento() {
    var lblMostrarPlanejamento = document.getElementById("lblMostrarPlanejamento");
    var listaPlanejamentos = "";
    for (var i = 0; i < vetorPlanejamentos.length; i++) {
        listaPlanejamentos += vetorPlanejamentos[i];
    }
    lblMostrarPlanejamento.innerHTML = listaPlanejamentos;
}

function limpaTxtt() {
    document.getElementById("txtModelo").value = "";
    document.getElementById("txtIntroducao").value = "";
    document.getElementById("txtObjetivos").value = "";
    document.getElementById("txtEstrategia").value = "";
    document.getElementById("txtEquipe").value = "";
    document.getElementById("txtCronograma").value = "";
}


// Avaliação
var conclusao = "";
var vetorConclusao = [];
var stringConclusao = "";

function preencheObjetooo() {
    var Envolvida = document.getElementById("txtEnvolvida").value;
    var Quantidade = document.getElementById("txtQuantidade").value;
    var QuantidadeNP = document.getElementById("txtQuantidadeNP").value;
    var Conclusao = document.getElementById("txtConclusao").value;

    conclusao = "<b>• Equipe Envolvida: </b> " + Envolvida + "<br><b> • Quantidade de Testes: </b> " + Quantidade + "<br><b> • Quantidade de Testes Positivos e Negativos: </b> " + QuantidadeNP + "<br><b> • Conclusão: </b> " + Conclusao + "<br><br>";

    vetorConclusao.push(conclusao);

    limpaTxttt();
}

function mostrarConclusao() {
    var lblMostrarConclusao = document.getElementById("lblMostrarConclusao");
    stringConclusao = vetorConclusao.join("<br>");
    lblMostrarConclusao.innerHTML = stringConclusao;
}

function limpaTxttt() {
    document.getElementById("txtEnvolvida").value = "";
    document.getElementById("txtQuantidade").value = "";
    document.getElementById("txtQuantidadeNP").value = "";
    document.getElementById("txtConclusao").value = "";
}
