function limpaDivDesc() {
    divDescricao.textContent = "";
}

function exibeDescricao(descricao) {
    limpaDivDesc();
    var desc = document.createElement("p");    
    divDescricao.appendChild(desc);
    desc.textContent = descricao;
    
    divDescricao.onmouseout = function() {
        limpaDivDesc();
    }
    return desc;
}

const desc_FunInv = "Investir em fundos é ter um time de especialistas que cuida diariamente da gestão do seu dinheiro. Praticidade é a palavra-chave. Cada fundo adota uma estratégia diferente, descubra quais deles combinam mais com os seus objetivos.";

const desc_LCI = "Ao investir em Letras de Crédito Imobiliário, você conta com segurança e isenção de Imposto de Renda, além de contribuir para o desenvolvimento de um setor importante na formação do PIB brasileiro.";

const desc_CDB = "Os Certificados de Depósito Bancário são pra você que busca um investimento seguro, com rentabilidade diária, opções com resgate a qualquer momento e movimentação descomplicada.";

const desc_TitPriv = "Já imaginou emprestar dinheiro pra grandes empresas de um jeito simples e receber juros por isso? Invista em títulos de Crédito Privado no Banco do Brasil.";

const desc_TesDir = "O Tesouro Direto é um programa de compra e venda de títulos públicos federais, para pessoas físicas e que conta com a segurança do Tesouro Nacional.";

const desc_Acoes = "Já imaginou se tornar sócio de uma grande empresa? Comprando ações, você adquire uma fração de um negócio e passa a receber seus lucros e dividendos. Busque maiores rentabilidades e equilibre risco e oportunidade nesses ativos de renda variável e alta volatilidade!";

const desc_CredImob = "Com o BB Crédito Imobiliário, você pode financiar a compra da sua casa, do seu apartamento ou de uma sala comercial nova ou usada. Também é possível usar seu imóvel como garantia pra ter um empréstimo ou ainda renegociar seu financiamento imobiliário. E sabe o melhor? É tudo 100% pelo celular ou pela internet.";

const desc_FinCarro = "Faça uma simulação e veja como financiar o seu carro novo. Diretamente do App BB, você pode ver as condições de crédito, escolher o financiamento que mais se encaixa no seu bolso e finalizar o contrato com o envio dos documentos. É fácil, rápido e não precisa sair de casa.";

const desc_EnerSolar = "Com o BB Crédito Energia Renovável, financie sistemas voltaicos que captam a luz do sol durante o dia e a convertem a fim de gerar energia solar residencial, economizando até 95% da sua conta. Além do baixo impacto ambiental, a instalação desse sistema é simples, de baixo custo e com grande potencial econômico. Assim, você usa o ar-condicionado, a sauna, o forno elétrico ou iluminações sem se preocupar e ainda valoriza o seu imóvel.";

const desc_CredMob = "Condições especiais pra você seguir um caminho mais sustentável. Muitas vantagens para adquirir sua bicicleta, patinete ou moto elétrica.";

const desc_CredRural = "O crédito rural é um financiamento destinado a produtores rurais, cujas atividades envolvam a produção e/ou comercialização de produtos do setor agropecuário. O Banco do Brasil disponibiliza linhas de crédito adequadas às necessidades do produtor rural que deseja investir em seu agronegócio e aumentar a sua produção agropecuária.";

const desc_CredTecno = "Condições especiais pra você ficar on com seu dia a dia. Quer trocar seu eletrônico ou adquirir um novo? O BB financia.";

const desc_RenegImob = "O Banco do Brasil sabe que muita coisa pode acontecer na sua vida ao longo de seu financiamento imobiliário, que pode durar até 35 anos: mudança de emprego, redução na renda, modificação da data de recebimento dos proventos, alteração de estado civil etc. Para auxiliá-lo nessa jornada e adequar seu financiamento à nova realidade, disponibilizamos diversas formas de renegociação.";

const desc_DivCed = "Para dívidas cedidas à Ativos S.A, acesse www.ativossa.com.br.";

const desc_RestNome = "Renegocie suas dívidas atrasadas com o BB nos canais disponíveis. Você pode realizar o pagamento à vista ou parcelar o saldo total vencido. Após o pagamento à vista ou, no caso de parcelamento, da primeira parcela do acordo, a restrição vinculada ao seu CPF será retirada das listas dos órgãos de proteção de crédito no prazo de cinco dias úteis.";

const desc_ParcAtr = "O pagamento da parcela em atraso poderá ser efetuado via APP BB. Acesse o menu principal > Consórcios > Gerenciar consórcios > Pagar parcela em atraso. A impressão de 2ª via do boleto encontra-se disponível no site meuconsorciobb.com.br.";





