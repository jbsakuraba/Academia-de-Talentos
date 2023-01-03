cpfDigitado.addEventListener("keyup", mascaraCPF);

function mascaraCPF(e) {

  var v = e.target.value.replace(/\D/g, "");

  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1-$2");

  e.target.value = v;
}

function cpfSemPonto(cpf) {
  let cpfFormat = parseInt(cpf.replace(/\./gi, '').replace('-', ''));
  return cpfFormat;
}



