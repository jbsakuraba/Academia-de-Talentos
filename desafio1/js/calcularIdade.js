function calculaIdade(nasc){
    
    var hoje = new Date();
    var nasc = document.querySelector("#nasc").value;

    function dataFormat(nasc) {
        
        var dia = String(nasc).split("/")[0];
        var mes = String(nasc).split("/")[1];
        var ano = String(nasc).split("/")[2];
        var dataFormat = ano + "-" + mes + "-" + dia;
        return dataFormat;
    }

    var dataNasc = new Date(dataFormat(nasc));

    var idade = Math.floor(Math.ceil(Math.abs(dataNasc.getTime() - hoje.getTime()) / (1000 * 3600 * 24)) / 365.25);

    return idade;     
}

