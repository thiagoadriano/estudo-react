import React from 'react';

import Cartao from './cartao';


class ListaCartoes extends React.Component
{
  prepareLista(lista = [], limite = 4) {
    let novaLista = [];
    let aux = [];
    for(let i = 0; i < lista.length; i++) {
      aux.push(lista[i]);
      if (aux.length === limite || lista.length - 1 === i) {
        novaLista.push(aux);
        aux = [];
      }
    }
    return novaLista;
  }

  prepareCartoes(lista = [], tamCol = 3) {
    return lista.map((grupo, i) => {
      return (
        <div className="row" key={i}>
          {this.gerarCartoes(grupo, tamCol)}
        </div>
      )
    });
  }

  gerarCartoes(grupo, tamCol) {
    let classCol = `col m${tamCol}`;
    return grupo.map((item, i) => {
      return (
        <div className={classCol} key={i}>
          <Cartao dados={item} />
        </div>
      )
    });
  }

  render() {
    let noticias = [
      {titulo: 'Titulo 1', desc: 'Descrição 1', detalhe: 'Detalhe de conteúdo 1', img: 'https://materializecss.com/images/office.jpg', link: '#linkaqui'},
      {titulo: 'Titulo 2', desc: 'Descrição 2', detalhe: 'Detalhe de conteúdo 2', img: 'https://materializecss.com/images/office.jpg', link: '#linkaqui'},
      {titulo: 'Titulo 3', desc: 'Descrição 3', detalhe: 'Detalhe de conteúdo 3', img: 'https://materializecss.com/images/office.jpg', link: '#linkaqui'},
      {titulo: 'Titulo 4', desc: 'Descrição 4', detalhe: 'Detalhe de conteúdo 4', img: 'https://materializecss.com/images/office.jpg', link: '#linkaqui'},
      {titulo: 'Titulo 5', desc: 'Descrição 5', detalhe: 'Detalhe de conteúdo 5', img: 'https://materializecss.com/images/office.jpg', link: '#linkaqui'},
      {titulo: 'Titulo 6', desc: 'Descrição 6', detalhe: 'Detalhe de conteúdo 6', img: 'https://materializecss.com/images/office.jpg', link: '#linkaqui'},
      {titulo: 'Titulo 7', desc: 'Descrição 7', detalhe: 'Detalhe de conteúdo 7', img: 'https://materializecss.com/images/office.jpg', link: '#linkaqui'},
    ];
    const listaNoticias = this.prepareLista(noticias, this.props.qtdCartoes);
    const listaCartoes = this.prepareCartoes(listaNoticias, this.props.tamanhoCol);

    return (
      <div>
        {listaCartoes}
      </div>
    );
  }
}

export default ListaCartoes;