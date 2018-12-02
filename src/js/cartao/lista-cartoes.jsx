import React from 'react';
import Cartao from './cartao';
import noticias from './noticias';
import Busca from '../busca/busca';

class ListaCartoes extends React.Component
{ 
  constructor(props) {
    super(props);
    this.state = {totalClique: 0, busca: '', noticias: [], listaCompleta: []};
    this.cliqueItem = this.cliqueItem.bind(this);
    this.atualizaBusca = this.atualizaBusca.bind(this);
    this.submitBusca = this.submitBusca.bind(this);
  }

  componentDidMount() {
    noticias.then(lista => {
      this.setState({ listaCompleta: lista });
      this.setState({ noticias: lista });
    });
  }

  atualizaBusca(evento) {
    this.setState({busca: evento.target.value});
    if(evento.target.value === '') {
      this.setState({noticias: this.state.listaCompleta});
    }
  }

  submitBusca(evento) {
    let busca = this.state.busca.toLowerCase();

    if(!busca) {
      return this.setState({noticias: this.state.listaCompleta});
    }

    let lista = this.state.listaCompleta;
    let findLista = lista.filter(noticia => {
      let t = noticia.titulo.toLowerCase(),
          d = noticia.desc.toLowerCase(),
          dt = noticia.detalhe.toLowerCase();
      return t.indexOf(busca) > -1 || d.indexOf(busca) > -1 || dt.indexOf(busca) > -1; 
    });

    this.setState({noticias: findLista});
  }

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

  cliqueItem(){
    this.setState(prevState => ({
      totalClique: ++prevState.totalClique
    }));
  }

  gerarCartoes(grupo, tamCol) {
    let classCol = `col m${tamCol}`;
    return grupo.map((item, i) => {
      return (
        <div className={classCol} key={i}>
          <Cartao dados={item} clique={this.cliqueItem} />
        </div>
      )
    });
  }

  render() {
    const listaNoticias = this.prepareLista(this.state.noticias, this.props.qtdCartoes);
    const listaCartoes = this.prepareCartoes(listaNoticias, this.props.tamanhoCol);

    return (
      <div>
        <div className="row">
          <Busca atualizaDados={this.atualizaBusca} submit={this.submitBusca} dados={this.state.busca} />
        </div>
        <p>total de cliques: {this.state.totalClique}</p>
        {listaCartoes}
      </div>
    );
  }
}

export default ListaCartoes;