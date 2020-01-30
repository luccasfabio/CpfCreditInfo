const redis = require('redis');

const client = redis.createClient(6379,'redis');

client.on('erro', function(err) { 
    console.log('Erro' + err);
});


module.exports = client;