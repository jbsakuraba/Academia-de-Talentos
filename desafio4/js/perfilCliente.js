botaoBuscar.addEventListener("click", function(evento) {
    evento.preventDefault();
    let cpfFormat = cpfSemPonto(cpfDigitado.value);
    
    if (cpfDigitado.value.length < 14) {
        alert("Informe o CPF com 11 dígitos");
        paginaInicial();
        cpfDigitado.value = "";
        
      } else {
        buscaCliente(cpfFormat);
      }        
})

async function buscaCliente(cpfFormat) {    
    mensagemErro.innerHTML = "";
    
    try {
        var clientesBD = await fetch("/api-lista/");//http://www.ksamochvalov.com/academia/listarClientes.php?matricula=F6002146
        var clientesBDConvertido = await clientesBD.json();

        if (clientesBDConvertido.erro) {
            throw Error ("Cliente não encontrado");
        } else {      
                
            var clienteSelecionado = clientesBDConvertido.find((cliente) =>{  
            return cliente.cpf == cpfFormat;
            })

            imprimeCliente(clienteSelecionado);
            perfilcliente(clienteSelecionado);
        }
        
    } catch (erro) {
        limpaDados();
        mensagemErro.innerHTML  = `<p>Cliente não encontrado. Verifique o CPF digitado.</p>`;        
        console.log(erro);
    }
}

function imprimeCliente(clienteSelecionado) {    
    const nome1 = document.querySelector("#nome1");
    const cpf1 = document.querySelector("#cpf1");
    const renda1 = document.querySelector("#renda1");
    const rendaFormatada = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(clienteSelecionado.renda);
    const cpfFormatado = clienteSelecionado.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    
    nome1.innerHTML = `Nome: ${clienteSelecionado.nome}`;
    cpf1.innerHTML = `CPF: ${cpfFormatado}`;
    renda1.innerHTML = `Renda: ${rendaFormatada}`;
}

function perfilcliente(clienteSelecionado) {
    
    if (clienteSelecionado.renda <= 5000) {
        limpaDiv();
        perfilCarteirao();        
        mostraPerfil(textoCarteirao);
    } else if (clienteSelecionado.renda <= 10000) {
        limpaDiv();
        perfilExclusivo();        
        mostraPerfil(textoExclusivo);
    } else {
        limpaDiv();
        perfilPrivate();        
        mostraPerfil(textoPrivate);
    }
}

function mostraPerfil(texto) {
    divPerfil.classList.remove("apaga");
    divPerfil.innerHTML = "";
    divDescricao.classList.remove("apaga");
    divDescricao.innerHTML = "";
    criarBotao(texto, "perfilSelecionado");
}





