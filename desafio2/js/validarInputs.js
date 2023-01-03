const inputCPF = document.querySelector("#cpf");
const erroCPF = document.querySelector("#erroCPF");

const inputNome = document.querySelector("#nome");
const erroNome = document.querySelector("#erroNome");

const inputNasc = document.querySelector("#nasc");
const erroNasc = document.querySelector("#erroNasc");

const inputRenda = document.querySelector("#renda");
const erroRenda = document.querySelector("#erroRenda");

mensagemErro(validaInputCPF, inputCPF, erroCPF, "Informe o CPF com 11 dígitos.");
mensagemErro(validaInputNome, inputNome, erroNome, "Informe o nome.");
mensagemErro(validaInputNasc, inputNasc, erroNasc, "Informe uma data válida.");
mensagemErro(validaInputRenda, inputRenda, erroRenda, "Informe a renda.");

function mensagemErro(validaInput, input, idErro, msgErro){
    input.addEventListener("focusout", function(){
        if(validaInput()){
            idErro.innerHTML = "";
            input.classList.remove("erro");                
        } else {
            idErro.innerHTML = msgErro;
            input.classList.add("erro");
        }
    })
}

function validaInputCPF(){
    if(inputCPF.value.length == 14){
        return true;
    }
}

function validaInputNome(){
    if(inputNome.value !== ""){
        return true;
    }    
}

function validaInputNasc(){
    const dataConver = converteNasc(inputNasc.value);
    const data = new Date(dataConver);

    if(inputNasc.value.length == 10 && !isNaN(data)){         
        return true;
    }
}

function validaInputRenda(){
    if(converteRenda(inputRenda.value) > 0){         
        return true;
    }
}

function converteNasc(nasc){        
    let dia = String(nasc).split("/")[0];
    let mes = String(nasc).split("/")[1];
    let ano = String(nasc).split("/")[2];
    let dataFormat = ano + "-" + mes + "-" + dia;
    
    return dataFormat;
}

function converteRenda(renda){
    renda = renda.replace('.', '').replace(',', '').replace(/\D/g, '');
    let rendaFloat = parseFloat(renda)/100;
    return rendaFloat;
}

function converteCPF(cpf){
    cpf = cpf.replace('.', '').replace(',', '').replace(/\D/g, '');
    return cpf;
}


