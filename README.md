## ✔  Banco de dados simples com Queries Mongo DB   



🍃  Criação do Banco de Dados e da Collection

```json
use funcionarioDB
db.createCollection('funcionarios')
```



🍃  Inserção de documentos

```json
// Insere 4 funcionários ao Document funcionarios
db.funcionarios.insert([
{
    "nome" : "João da Silva",
    "email" : "joao@email.com",
    "cpf" : "12345678901",
    // idade será adicionada no update
},
{
    "nome" : "Pedro Henrique",
    "email" : "pedro@email.com",
    "cpf" : "12345678903",
    "idade" : NumberInt(25)
},
{
    "nome" : "Maria Ramos",
    "email" : "maria@email.com",
    "cpf" : "12345678902",
    "idade" : NumberInt(31)
},
{
    "nome" : "Larissa da Silva",
    "email" : "larissa@email.com",
    "cpf" : "12345678904",
    "idade" : NumberInt(36)
},
{
    "nome" : "Juliana de Oliveira",
    "email" : "juliana@email.com",
    "cpf" : "12345678905",
    "idade" : NumberInt(22)
},
    {
    "nome" : "Marcos Lima",
    "email" : "marcos@email.com",
    "cpf" : "12345678906",
    "idade" : NumberInt(51)
}
])
```

🍃  Atualização de documentos

```json
//Adiciona idade ao funcionário com cpf '12345678901'
db.getCollection('funcionarios').update(
    {
        "cpf" : "12345678901"
    },
    {$set:
        {"idade": NumberInt(42)}
    },
    {
        "multi" : false,
        "upsert" : false 
    }
);
```

🍃  Exclusão de documentos

```json
// Exclui o usuário de cpf '2345678902'
db.getCollection('funcionarios').remove({ "cpf" : '12345678902' });
```

🍃  Consulta com projeção

```json
// Consulta o funcionario com nome 'Pedro Henrique'
db.getCollection('funcionarios').find({"nome": "Pedro Henrique"})

// Consulta todos os funcionairos mostrando apenas o atributo cpf:
db.getCollection('funcionarios').find({}, {"cpf": 1})
```

🍃  Consulta utilizando combinação entre os seletores

```json
// Consulta os funcionarios com idade maior que 20 E menor que 40
db.getCollection('funcionarios').find(
    {$and:[
    {'idade': {$gt: 20}},
    {'idade': {$lt: 40}}
    ]}
)
```

🍃  Consulta paginada e ordenada

```json
// Consulta os funcionarios com idades menores ou igual a 40, mostrando só os nomes deles e em ordem alfabética além de limitar a resposta a 2 Documents.
db.getCollection('funcionarios').find(
    {'idade': {$lte:40}},
    {'nome':1}
).limit(3).sort({'nome': 1})
```

