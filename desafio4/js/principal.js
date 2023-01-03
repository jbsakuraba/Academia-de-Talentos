const divOpcoes = document.querySelector(".opcoes");
const divDescricao = document.querySelector(".descricao");
const divPerfil = document.querySelector(".perfis");
const cpfDigitado = document.querySelector("#inputCPF");
const botaoBuscar = document.querySelector("#buscar");
const mensagemErro = document.querySelector("#erro");

const textoCarteirao = "Carteirão";
const textoExclusivo = "Exclusivo";
const textoPrivate = "Private";

paginaInicial();

cpfDigitado.addEventListener("focusout", function(){
        
    if(cpfDigitado.value == "") {         
        paginaInicial();
    }    
})

function criaOpcao(info, classe, descricao) {
    var op = document.createElement("p");
    op.classList.add(classe);
    op.textContent = info;
    op.onmouseenter = function() {
        exibeDescricao(descricao);
    }    
    return op;
}

function botoesPerfil() {
    
    const carteirao = document.querySelector("#carteirao");
    carteirao.addEventListener("click", function() {
        limpaDiv();
        perfilCarteirao();
    })

    const exclusivo = document.querySelector("#exclusivo");
    exclusivo.addEventListener("click", function() {    
        limpaDiv();
        perfilExclusivo();
    })

    const private = document.querySelector("#private");
    private.addEventListener("click", function() {
        limpaDiv();
        perfilPrivate();
    })
}

function perfilCarteirao() {
    divOpcoes.appendChild(criaOpcao("Renegociação de Financiamento Imobiliário", "opc", desc_RenegImob));
    divOpcoes.appendChild(criaOpcao("Dívidas cedidas", "opc", desc_DivCed));
    divOpcoes.appendChild(criaOpcao("Restrição no nome", "opc", desc_RestNome));
    divOpcoes.appendChild(criaOpcao("Parcelas em atraso no consórcio", "opc", desc_ParcAtr));
}

function perfilPrivate() {
    divOpcoes.appendChild(criaOpcao("Fundos de Investimento", "opc", desc_FunInv));
    divOpcoes.appendChild(criaOpcao("LCI", "opc", desc_LCI));
    divOpcoes.appendChild(criaOpcao("CDB", "opc", desc_CDB));
    divOpcoes.appendChild(criaOpcao("Títulos Privados", "opc", desc_TitPriv));
    divOpcoes.appendChild(criaOpcao("Tesouro Direto", "opc", desc_TesDir));
    divOpcoes.appendChild(criaOpcao("Ações", "opc", desc_Acoes));
}

function perfilExclusivo() {
    divOpcoes.appendChild(criaOpcao("Crédito Imobiliário", "opc", desc_CredImob));
    divOpcoes.appendChild(criaOpcao("Financiamento de Carro", "opc", desc_FinCarro));
    divOpcoes.appendChild(criaOpcao("Crédito Energia Solar", "opc", desc_EnerSolar));
    divOpcoes.appendChild(criaOpcao("Crédito Mobilidade", "opc", desc_CredMob));
    divOpcoes.appendChild(criaOpcao("Crédito Rural", "opc", desc_CredRural));
    divOpcoes.appendChild(criaOpcao("Crédito Tecnologia", "opc", desc_CredTecno));
}

function criarBotao(texto, id) {
    const tipo = document.createElement("button");
    tipo.classList.add("botao");
    tipo.setAttribute("id", id);
    tipo.innerText = texto;
    divPerfil.appendChild(tipo);
}

function limpaDados() {
    nome1.innerHTML = "";
    cpf1.innerHTML = "";
    renda1.innerHTML = "";
    erro.innerHTML = "";

    divPerfil.innerHTML = "";
    divPerfil.classList.add("apaga");
    divOpcoes.innerHTML = "";
    divDescricao.innerHTML = "";
    divDescricao.classList.add("apaga");    
}
    
function limpaDiv() {
    divOpcoes.textContent = "";
}

function paginaInicial() {
    limpaDados();
    divPerfil.classList.remove("apaga");    
    divDescricao.classList.remove("apaga");        
    criarBotao(textoPrivate, "private");
    criarBotao(textoExclusivo, "exclusivo");
    criarBotao(textoCarteirao, "carteirao"); 
    botoesPerfil();
}



