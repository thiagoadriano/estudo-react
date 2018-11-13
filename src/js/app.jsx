import ReactDOM from 'react-dom';
import React from 'react';

import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import ListaCartoes from './cartao/lista-cartoes';

let App = (
  <div>
    <Navbar titulo="React" cor="orange"/>
    <div className="container">
      <Titulo />
      <ListaCartoes qtdCartoes="4" tamanhoCol="3" />
    </div>
  </div>
);

ReactDOM.render(App, document.querySelector('#app'));