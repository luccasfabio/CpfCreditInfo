const SearchController = require('../app/controllers/SearchController')

test('tests invalid query', () => { 
  expect(SearchController.getFinancialMovement())
})