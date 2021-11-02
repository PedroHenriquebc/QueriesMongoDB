db.getCollection('funcionarios').find(
    {$and:[
    {'idade': {$gt: 20}},
    {'idade': {$lt: 40}}
    ]}
)