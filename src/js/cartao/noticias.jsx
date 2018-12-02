import axios from 'axios';

async function getNoticias() {
  let dados = await axios.get('api/noticias');
  return  dados.data;
}

export default getNoticias();