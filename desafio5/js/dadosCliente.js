const mensagemErro = document.querySelector("#erroCPF");
const cpfDigitado2 = document.querySelector("#inputCPF");
const tdNome = document.querySelector("#tdNome");
const tdCPF = document.querySelector("#tdCPF");
const tabela = document.querySelector(".tabelaCliente");

cpfDigitado2.addEventListener("keypress", function(e) {
    let cpfFormat = cpfSemPonto(cpfDigitado2.value);
    
    if(e.key === "Enter") {
        if (cpfDigitado2.value.length < 11) {
            alert("Informe o CPF com 11 dígitos");
            limpaDados();
            
          } else {
            limpaDados();             
            buscaCliente(cpfFormat);        
          }
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
            campoSeleciona.classList.remove("apaga");
            imprimeCliente(clienteSelecionado);
        }
        
    } catch (erro) {
        limpaDados();
        mensagemErro.innerHTML  = `<p>Cliente não encontrado. Verifique o CPF digitado.</p>`;        
        console.log(erro);
    }
}

function limpaDados() {
    cpfDigitado2.value = "";
    tdNome.innerHTML = "";
    tdCPF.innerHTML = "";
    erroCPF.innerHTML = "";
    erroHora.innerHTML = "";
    msg.innerHTML = "";
    tabela.classList.add("apaga");
    msg.classList.add("apaga");
    campoSeleciona.classList.add("apaga");
}

function imprimeCliente(clienteSelecionado){
    const cpfFormatado = clienteSelecionado.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    tabela.classList.remove("apaga");
    
    const trNome = document.createElement("tr");
    const td1 = document.createElement("td");    
    
    td1.textContent = clienteSelecionado.nome;
    trNome.appendChild(td1);
    tdNome.appendChild(trNome);
    
    const trCPF = document.createElement("tr");
    const td2 = document.createElement("td");
    
    td2.textContent = cpfFormatado;
    trCPF.appendChild(td2);
    tdCPF.appendChild(trCPF);
}





