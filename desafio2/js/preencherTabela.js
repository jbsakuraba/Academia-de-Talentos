function preencheTabela(listaClientes) {

    listaClientes.forEach(listaClientes => {
        let dadosClienteTr = montaTr(listaClientes);
        const tabela = document.querySelector("#tabelaBody");
        tabela.appendChild(dadosClienteTr);
    });
}

function montaTr(linhaCliente) {

    const dadosClienteTr = document.createElement("tr");
    dadosClienteTr.setAttribute("id", linhaCliente.codigo);

    const cpfFormatado = linhaCliente.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    const rendaFormatada = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(linhaCliente.renda);

    dadosClienteTr.appendChild(montaTd("", "info-excluir")).innerHTML = "<img src='img/icons8-resíduos-24.png' alt='delete' onclick ='botaoExcluir()'>";
    dadosClienteTr.appendChild(montaTd(cpfFormatado, "info-cpf"));
    dadosClienteTr.appendChild(montaTd(linhaCliente.nomeCliente, "info-cliente"));
    dadosClienteTr.appendChild(montaTd(formataNasc(linhaCliente.dataNascimento, "info-nasc")));
    dadosClienteTr.appendChild(montaTd(calculaIdade(linhaCliente.dataNascimento) +" anos", "info-idade"));
    dadosClienteTr.appendChild(montaTd(rendaFormatada, "info-renda"));
    
    if (validaRenda(linhaCliente.renda)) {
        dadosClienteTr.classList.add("cliente");
        dadosClienteTr.appendChild(montaTd("--", "info-justif"));
    }else {
        dadosClienteTr.classList.add("menorSalario");
        dadosClienteTr.appendChild(montaTd("", "info-justif")).innerHTML = "<input type='text' placeholder='Justificativa' class='input-justif'>";        
    }

    return dadosClienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;   

    return td;  
}


