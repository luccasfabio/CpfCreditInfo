const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();

const {
  BASE_A_API_URL,
  BASE_B_API_URL,
  BASE_C_API_URL
} = require('./URLs');

const baseAProxy = httpProxy(BASE_A_API_URL);
const baseBProxy = httpProxy(BASE_B_API_URL);
const baseCProxy = httpProxy(BASE_C_API_URL);

app.get('/', (req, res) => res.send('Hello Gateway API'));

app.get('/A', (req, res, next) => baseAProxy(req, res, next));
app.get('/B', (req, res, next) => baseBProxy(req, res, next));
app.get('/C/lastBureauQuery', (req, res, next) => baseCProxy(req, res, next));
app.get('/C/financialMovement', (req, res, next) => baseCProxy(req, res, next));

app.listen(3000);
