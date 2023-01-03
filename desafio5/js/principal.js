const botaoBuscar = document.querySelector("#solicitar");
const servico = document.querySelector("#servico");
const setor = document.querySelector("#setor");
const msg = document.querySelector("#msg");
const erroHora = document.querySelector("#erroHora");
const campoSeleciona = document.querySelector(".seleciona");

var data = new Date();
var hora = data.getHours();

botaoBuscar.addEventListener("click", function(evento){
    evento.preventDefault();

    if (hora > 16) {        
        erroHora.innerHTML = "Serviço bloqueado após às 16h. Volte amanhã.";        
    } else {        
        msg.classList.remove("apaga");
        msg.innerHTML = `Solicitado o serviço de <span>${servico.value}</span> pelo setor <span>${setor.value}</span> para o cliente <span>${tdNome.textContent}</span>.`;
    }           
})



