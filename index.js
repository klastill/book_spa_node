const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5050;

app.use(cors());
app.use(express.json());

app.get('/api/test', async (req, res) => {
  const url = 'http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgyb05011150001&SearchTarget=Book&QueryType=BestSeller&MaxResults=50&Cover=Big&&output=js&Version=20131101&start=1';
  const {data} = await axios.get(url);
  res.send(data);
});

app.get('/', (req, res) => res.send('hi'));

app.listen(port, () => console.log(port));