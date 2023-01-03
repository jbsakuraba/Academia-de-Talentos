function somaRenda() {

  var rendaCliente = document.querySelectorAll(".info-renda");
  var total = 0;

  for (var i = 0; i < rendaCliente.length; i++) {
    var cliente = rendaCliente[i];    
    var rendaString = cliente.textContent;
    var rendaFloat = parseFloat(rendaString.toString().replace(/\./g, '').replace(',','.'));
    total = total + rendaFloat;
  }

  var totalRendas = document.querySelector("#totalrenda");
  var somaString = total.toLocaleString('pt-br',{style: 'decimal',minimumFractionDigits:2});
  
  totalRendas.innerHTML = somaString;
}  



