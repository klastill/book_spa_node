const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/api/best', async (req, res) => {
  let base = 'http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgyb05011150001&SearchTarget=Book&QueryType=BestSeller';
  let query1 = '&MaxResults=';
  let query2 = '&Cover=Big&&output=js&Version=20131101&start=';
  let {max, page} = req.query;
  let url = base + query1 + max + query2 + page
  const {data} = await axios.get(url);
  res.send(data);
});

app.get('/api/new', async (req, res) => {
  let base = 'http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgyb05011150001&SearchTarget=Book&QueryType=ItemNewSpecial&Cover=Big&&output=js&Version=20131101';
  let query1 = '&MaxResults=';
  let query2 = '&start=';
  let {max, page} = req.query;
  let url = base + query1 + max + query2 + page
  const {data} = await axios.get(url);
  res.send(data);
});

app.get('/', (req, res) => res.send('hi'));

app.listen(port, () => console.log(port));