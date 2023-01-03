var salarioMinimo = 1212;

function validaRenda(r) {

    r = r.replace('.', '').replace(',', '').replace(/\D/g, '');
    var rendafloat = parseFloat(r)/100;

    if (rendafloat > salarioMinimo) { 
        return true;
    } else {
        return false;
    }
}

