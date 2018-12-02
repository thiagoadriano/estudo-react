import React from 'react';

class Titulo extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {hora: new Date()};
  }
  
  componentDidMount(){
    this.horaID = setInterval(
      () => this.atualizarTempo(),
      1000
    );
  }

  atualizarTempo(){
    this.setState({hora: new Date()});
  }

  componentWillUnMount() {
    clearInterval(this.horaID);
  }

  render() {
    return <h1>Estudo de React {this.state.hora.toLocaleTimeString()}</h1>
  }
}

export default Titulo;