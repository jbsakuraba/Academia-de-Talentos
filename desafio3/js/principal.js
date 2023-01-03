const divOpcoes = document.querySelector(".opcoes")

function limpaDiv() {
    divOpcoes.textContent = ""
}

function criaOpcao(info, classe, descricao) {
    var op = document.createElement("p");
    op.classList.add(classe);
    op.textContent = info;
    op.onmouseenter = function() {
        exibeDescricao(descricao);
    }
    return op
}

var carteirao = document.querySelector("#carteirao");
carteirao.addEventListener("click", function() {

    limpaDiv();
    divOpcoes.appendChild(criaOpcao("Renegociação de Financiamento Imobiliário", "opc", desc_RenegImob));
    divOpcoes.appendChild(criaOpcao("Dívidas cedidas", "opc", desc_DivCed));
    divOpcoes.appendChild(criaOpcao("Restrição no nome", "opc", desc_RestNome));
    divOpcoes.appendChild(criaOpcao("Parcelas em atraso no consórcio", "opc", desc_ParcAtr));
})

var exclusivo = document.querySelector("#exclusivo");
exclusivo.addEventListener("click", function() {
    
    limpaDiv();
    divOpcoes.appendChild(criaOpcao("Crédito Imobiliário", "opc", desc_CredImob));
    divOpcoes.appendChild(criaOpcao("Financiamento de Carro", "opc", desc_FinCarro));
    divOpcoes.appendChild(criaOpcao("Crédito Energia Solar", "opc", desc_EnerSolar));
    divOpcoes.appendChild(criaOpcao("Crédito Mobilidade", "opc", desc_CredMob));
    divOpcoes.appendChild(criaOpcao("Crédito Rural", "opc", desc_CredRural));
    divOpcoes.appendChild(criaOpcao("Crédito Tecnologia", "opc", desc_CredTecno));
})

var private = document.querySelector("#private");
private.addEventListener("click", function() {

    limpaDiv();
    divOpcoes.appendChild(criaOpcao("Fundos de Investimento", "opc", desc_FunInv));
    divOpcoes.appendChild(criaOpcao("LCI", "opc", desc_LCI));
    divOpcoes.appendChild(criaOpcao("CDB", "opc", desc_CDB));
    divOpcoes.appendChild(criaOpcao("Títulos Privados", "opc", desc_TitPriv));
    divOpcoes.appendChild(criaOpcao("Tesouro Direto", "opc", desc_TesDir));
    divOpcoes.appendChild(criaOpcao("Ações", "opc", desc_Acoes));
})

