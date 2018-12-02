import React from 'react';

class Cartao extends React.Component
{
  constructor(props){
    super(props);
    this.cliquecard = this.cliquecard.bind(this);
  }
  cliquecard(){
    this.props.clique();
  }

  render() {
    let dados = this.props.dados;

    return (
      <div className="card sticky-action">
        <div className="card-image waves-effect waves-block waves-light" onClick={this.cliquecard}>
          <img className="activator" src={dados.img}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{dados.titulo}<i className="material-icons right">more_vert</i></span>
          <p>{dados.desc}</p>
        </div>
        <div className="card-action">
          <a href={dados.link}>Ver mais...</a>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{dados.titulo}<i className="material-icons right">close</i></span>
          <p>{dados.detalhe}</p>
        </div>
      </div>
    );
  }
}

export default Cartao;