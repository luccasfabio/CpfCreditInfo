const redis = require('redis');

const client = redis.createClient(6379,'0.0.0.0');

client.on('erro', function(err) { 
    console.log('Erro' + err);
});


module.exports = client;