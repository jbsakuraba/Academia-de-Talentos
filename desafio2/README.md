### Confira o meu desafio [aqui](https://jbsakuraba-academia-desafio2.netlify.app/)

<img align="left" width="100" height="100" src="https://user-images.githubusercontent.com/116609254/210120701-cc849e4b-06a4-40f6-90c3-dba7f864480e.png">

# <h1 align="center">Academia de Talentos de TI – Intermediário 2022_02S</h1>
---
## Desafio 2
### Mínimo necessário:
Com base:
* no conteúdo visto no Curso 200535 Javascript: Programando na linguagem web (Capítulos 5 ao 9) e
* no Desafio 1.

Refatore o código do primeiro desafio, promovendo as seguintes melhorias:
1. Ao clicar no botão de inserção de cliente, a página faça uma requisição ajax, para uma das APIs listadas abaixo, inserindo o cliente no banco de dados (BD) disponibilizado;
2. Após feita a inserção no BD, a página deverá fazer outra requisição ajax, desta vez solicitando a lista de clientes;
3. De posse da listagem de clientes (item 2) a tabela de clientes exibida na página deverá ser atualizada;
### Bônus opcional:
1. Quando der dois cliques num cliente da tabela, ao invés de apagar o cliente na tabela, deverá ser feita requisição ajax apagando o cliente do BD;
2. Após feita a deleção no BD, a página deverá fazer outra requisição ajax, desta vez solicitando a lista de clientes;
3. De posse da listagem de clientes (item 2) a tabela de clientes exibida na página deverá ser atualizada;

### APIs POST (inserir novo registro):
{"nome": “Flávia","data_nascimento": "1991-09-05","renda": 1000,"cpf": 12345678912,"matricula": "Fxxxxxxx“}  
http://www.ksamochvalov.com/academia/inserirCliente.php  

### APIs DELETE (apagar um registro):
{"cd_clientes": 1}  
http://www.ksamochvalov.com/academia/removerCliente.php  

### APIs PATCH (atualizar um registro):
{"cd_clientes": 1,"nome": "Flavia","data_nascimento": "1991-09-05“}  
http://www.ksamochvalov.com/academia/AtualizarCliente.php  

### APIs GET (listar todos pela matricula):
substitua Fxxxxxxx por sua matricula  
http://www.ksamochvalov.com/academia/listarClientes.php?matricula=Fxxxxxxx  


