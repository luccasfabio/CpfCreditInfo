const {Router} = require('express');
const SearchController = require('./app/controllers/SearchController')
const StorageController = require('./app/controllers/StorageController')

const routes = Router();

routes.get('/C/lastBureauQuery', SearchController.getLastBureauQuery);
routes.get('/C/financialMovement', SearchController.getFinancialMovement);
routes.post('/C/addRecord', StorageController.store);
module.exports = routes;