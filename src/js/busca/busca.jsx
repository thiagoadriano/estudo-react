import React from 'react';

class Busca extends React.Component{

  constructor(props){
    super(props);
    this.atualizaBusca = this.atualizaBusca.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  atualizaBusca(evento){
    this.props.atualizaDados(evento);
  }

  onSubmit(evento) {
    evento.preventDefault();
    this.props.submit(evento);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-field col s6">
          <input type="text" onChange={this.atualizaBusca} placeholder="digite sua busca" value={this.props.dados}/>
          <label>Busca</label>
        </div>
        <button type="submit">Buscar</button>
      </form>
    );
  }

}

export default Busca;