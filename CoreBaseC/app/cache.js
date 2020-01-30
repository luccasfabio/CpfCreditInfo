const redis = require('redis');

const client = redis.createClient();

client.on('erro', function(err) { 
    console.log('Erro' + err);
});


module.exports = client;