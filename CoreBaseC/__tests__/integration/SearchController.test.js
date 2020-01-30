const SearchController = require('../../app/controllers/SearchController');
const { CpfCreditCardInfo } = require('../../app/models');
const request = require('supertest');
const app = require('../../app');
const truncate = require('../utils/truncate');

describe('CPF searches on credit bureaus information', () => {

  beforeEach(async () => {
    await truncate();
  })

  it('should fetch date of last credit card purchase for a valid cpf', async () => {

    const cpfInfo = await CpfCreditCardInfo.create({
      cpf: '41731412894',
      lastBureauQuery: '2019-12-12 13:42:00',
      lastCreditCardPurchase: '2020-01-29 00:55:02',
      lastCreditCardPurchaseValue: 5209.99,
      lastCreditCardPurchaseQuotas: 20,
      updatedAt: '2020-01-29 00:55:02'
    });

    const response = await request(app)
      .get('/C/lastBureauQuery')
      .query({
        cpf: '41731412894'
      })

    expect(response.status).toBe(200);
  });

  it('should return a friendly error message when an invalid CPF is queried', async () => {

    const response = await request(app)
      .get('/C/lastBureauQuery')
      .query({
        cpf: '12345678910'
      })

    expect(response.status).toBe(200);
  });
},

describe('CPF last credit card purchase info', () => {

    beforeEach(async () => {
      await truncate();
    })

    it('should fetch date of, value of and number of quotas of the last credit card purchase of given cpf', async () => {

      const cpfInfo = await CpfCreditCardInfo.create({
        cpf: '41731412894',
        lastBureauQuery: '2019-12-12 13:42:00',
        lastCreditCardPurchase: '2020-01-29 00:55:02',
        lastCreditCardPurchaseValue: 5209.99,
        lastCreditCardPurchaseQuotas: 20,
        updatedAt: '2020-01-29 00:55:02'
      });

      const response = await request(app)
        .get('/C/lastBureauQuery')
        .query({
          cpf: '41731412894'
        })

      expect(response.status).toBe(200);
    });

    it('should return a friendly error message when an invalid CPF is queried', async () => {

      const response = await request(app)
        .get('/C/lastBureauQuery')
        .query({
          cpf: '12345678910'
        })

      expect(response.status).toBe(200);
    });
  }));