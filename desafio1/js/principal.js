var alerta = document.querySelector('.alerta');

var incluirDados = document.querySelector('#incluir');
incluirDados.addEventListener("click", function(event) {
    event.preventDefault();    

        if (!validaRenda(renda.value)) {  

            alerta.innerHTML += `<p class="alerta">Verificar a renda de ${nome.value}, há indício de trabalho escravo.</p>`;
            
            justificativa = prompt("Justifique o motivo da renda ser inferior a 1 salário mínimo.");

        } else {
            justificativa = "";
        }             
    incluiCliente();
    somaRenda();
})

var tabelaClientes = document.querySelector(".tabela");
tabelaClientes.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 700);    
});

