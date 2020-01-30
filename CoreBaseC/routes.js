const {Router} = require('express');
const SearchController = require('./app/controllers/SearchController')

const routes = Router();

routes.get('/C/lastBureauQuery', SearchController.getLastBureauQuery);
routes.get('/C/financialMovement', SearchController.getFinancialMovement);

module.exports = routes;