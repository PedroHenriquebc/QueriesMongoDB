db.getCollection('funcionarios').find(
    {'idade': {$lte:40}},
    {'nome':1}
).limit(3).sort({'nome': 1})