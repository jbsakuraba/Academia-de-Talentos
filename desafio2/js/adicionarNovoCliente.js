const formulario = document.querySelector(".formulario");

const botaoIncluir = document.querySelector("#incluir");
botaoIncluir.addEventListener("click", function(evento){
    evento.preventDefault();
    alerta.innerHTML = "";
    if(validaInputCPF() && validaInputNome() && validaInputNasc() && validaInputRenda() ){
        
        const novoCliente = {
            nome: inputNome.value,
            data_nascimento: converteNasc(inputNasc.value),
            renda: converteRenda(inputRenda.value),
            cpf: converteCPF(inputCPF.value),
            matricula: 'F6002146'
        }
        alerta.innerHTML = "";
        adicionarCliente(novoCliente);
        justifRenda(inputRenda.value);   
        formulario.reset();        
        limpaTabela();
        setTimeout(function() {
            buscaClientesNoBD();
        }, 300);
    } else {
        alert("Verifique se os dados foram preenchidos corretamente.");
    }    
})

function adicionarCliente(novoCliente) {
    fetch("/api-insere/", {//http://www.ksamochvalov.com/academia/inserirCliente.php
        method: "POST",
        body: JSON.stringify(novoCliente),
        //headers: {
        //    "Content-type": "application/jason; charset=UTF-8"
        //}
    })
        .then(response => response.json())
        .then(data => alerta.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function limpaTabela() {
    const tabela = document.querySelector("#tabelaBody");
    tabela.innerHTML = "";
}


