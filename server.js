let express =  require('express');
let apiRouter = require('./router');
let app = express();

app.use(express.static(__dirname + '/public/'));

app.use('/api', apiRouter);


app.listen(8080, () => {
  console.log('Server rodando na porta 8080');
})