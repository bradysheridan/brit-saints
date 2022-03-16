import { fetchUrl } from 'fetch';

const getSaintData = () => fetchUrl("https://docs.google.com/spreadsheets/d/1acFdWZH9_uzWfDNP5pyHgw0F8WodNCgrb0wSay5Mhuc/gviz/tq?tqx=out:csv&sheet=sheet1", function(error, meta, body) {
  console.log(body.toString());
  return body;
});

export default getSaintData;
