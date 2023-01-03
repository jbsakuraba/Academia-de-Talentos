function apagaClienteNoBD(idRemovido) {
    fetch("/api-remove/", {//http://www.ksamochvalov.com/academia/removerCliente.php
        method: "DELETE",
        body: JSON.stringify(idRemovido),
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

// const tabelaClientes = document.querySelector("#tabelaBody");
// tabelaClientes.addEventListener("dblclick", function(event) {    
//     event.target.parentNode.classList.add("fadeOut");
//     setTimeout(function() {        
//         const idRemovido = {
//             "cd_clientes": event.target.parentElement.id
//         }
        
//         apagaClienteNoBD(idRemovido);
//         limpaTabela();
//         setTimeout(function() {
//             buscaClientesNoBD();
//         }, 300);
        
//     }, 300);
// });


function botaoExcluir(){   
    
    this.event.target.parentNode.parentNode.classList.add("fadeOut");
    const idRemovido = {
        "cd_clientes": this.event.target.parentElement.parentElement.id
    }
    
    apagaClienteNoBD(idRemovido);
    limpaTabela();
    setTimeout(function() {
        buscaClientesNoBD();
    }, 300);
 }


