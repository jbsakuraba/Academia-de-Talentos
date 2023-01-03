const salarioMinimo = 1212;
buscaClientesNoBD();

const alerta = document.querySelector(".alerta");
alerta.innerHTML = "";

async function buscaClientesNoBD() {       

    let listaClientes = [];
    try {
        var clientesBD = await fetch("/api-lista/");//http://www.ksamochvalov.com/academia/listarClientes.php?matricula=F6002146
        var clientesBDConvertido = await clientesBD.json();

        if (clientesBDConvertido.erro) {
            throw Error ("Falha na busca por clientes");
        } else {
                clientesBDConvertido.forEach(function(cliente) {                        
                        
                    const dadosCliente = {
                        codigo: cliente.id,
                        cpf: cliente.cpf,
                        nomeCliente: cliente.nome,
                        dataNascimento: cliente.data_nascimento,                        
                        renda: cliente.renda,                        
                    }
    
                    listaClientes.push(dadosCliente);
                    //console.log(listaClientes);
                });
                
                preencheTabela(listaClientes);
                somaRenda();
        }        
    } catch (erro) {
        alerta.innerHTML  = erro;
        console.log(erro);
    }
}

function calculaIdade(dataNascimento){
    
    var hoje = new Date();
    var nasc = new Date(dataNascimento);
    
    var idade = Math.floor(Math.ceil(Math.abs(nasc - hoje) / (1000 * 3600 * 24)) / 365.25);

    return idade;     
}

function formataNasc(nasc) {
        
    let ano = String(nasc).split("-")[0];
    let mes = String(nasc).split("-")[1];
    let dia = String(nasc).split("-")[2];
    let dataFormat = dia + "/" + mes + "/" + ano;
    
    return dataFormat;
}

function validaRenda(r) {

    r = r.replace('.', '').replace(',', '').replace(/\D/g, '');
    var rendafloat = parseFloat(r)/100;

    if (rendafloat > salarioMinimo) { 
        return true;
    } else {
        return false;
    }
}

function somaRenda() {

    var rendaCliente = document.querySelectorAll(".info-renda");
    var total = 0;
  
    for (var i = 0; i < rendaCliente.length; i++) {
      var cliente = rendaCliente[i];    
      var rendaString = cliente.textContent;
      var rendaFloat = parseFloat(rendaString.toString().replace(/\./g, '').replace(',','.').replace(/\D/g, '')/100);
      total = total + rendaFloat;
    }
  
    var totalRendas = document.querySelector("#totalrenda");
    var somaString = total.toLocaleString('pt-br',{style: 'decimal',minimumFractionDigits:2});
    
    totalRendas.innerHTML = somaString;
  }  

  function justifRenda(r){

    if (!validaRenda(r)) {  

        alerta.innerHTML = `<p>Informe justificativa para a renda de <span>${nome.value}</span>. >>> Há indício de trabalho escravo.</p>`;
    }             
}


