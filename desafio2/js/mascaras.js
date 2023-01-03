var mascNasc = document.querySelector('#nasc');
mascNasc.addEventListener("keyup", mascaraData);

function mascaraData(e) {

  var v = e.target.value.replace(/\D/g,"");

  v = v.replace(/(\d{2})(\d)/,"$1/$2");
  v = v.replace(/(\d{2})(\d)/,"$1/$2");

  e.target.value = v;
}

var mascCPF = document.querySelector('#cpf');
mascCPF.addEventListener("keyup", mascaraCPF);

function mascaraCPF(e) {

  var v = e.target.value.replace(/\D/g, "");

  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1-$2");

  e.target.value = v;
}

var mascRenda = document.querySelector('#renda');
mascRenda.addEventListener("keyup", mascaraRenda);

function mascaraRenda(e) {

  var v = e.target.value.replace(/\D/g,"");

  v = (v/100).toFixed(2) + "";
  v = v.replace(".", ",");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

  e.target.value = v;
}

