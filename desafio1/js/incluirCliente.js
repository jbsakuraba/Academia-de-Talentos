function obtemDadosCliente(formulario) {

    var linhacliente = {        
        
        cpf: formulario.cpf.value,
        nome: formulario.nome.value,
        nasc: formulario.nasc.value,
        idade: calculaIdade(nasc) + " anos",
        renda: formulario.renda.value,
        justif: justificativa
    }
    return linhacliente;
}

function montaTr(linhaCliente) {

    var dadosClienteTr = document.createElement("tr");

    if (validaRenda(renda.value)) {
        dadosClienteTr.classList.add("cliente");
    }else {
        dadosClienteTr.classList.add("menorSalario");
    }

    dadosClienteTr.appendChild(montaTd(linhaCliente.cpf, "info-cpf"));
    dadosClienteTr.appendChild(montaTd(linhaCliente.nome, "info-nome"));
    dadosClienteTr.appendChild(montaTd(linhaCliente.nasc, "info-nasc"));
    dadosClienteTr.appendChild(montaTd(linhaCliente.idade, "info-idade"));
    dadosClienteTr.appendChild(montaTd(linhaCliente.renda, "info-renda"));
    dadosClienteTr.appendChild(montaTd(linhaCliente.justif, "info-justif"));

    return dadosClienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;  
}

function incluiCliente() {
    
    var formulario = document.querySelector(".formulario");
    var linhaCliente = obtemDadosCliente(formulario);
    var dadosClienteTr = montaTr(linhaCliente);
    var tabela = document.querySelector(".tabela");
    tabela.appendChild(dadosClienteTr);
    formulario.reset();
}

