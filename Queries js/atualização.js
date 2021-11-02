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