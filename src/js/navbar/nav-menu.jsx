import React from 'react';

class NavMenu extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {menuAtivo: 'Home'};
  }

  alteraMenu(titulo) {
    this.setState({menuAtivo: titulo});
  }

  render() {
    let menuLinks = this.props.menu.map((x, i) => (
        <li 
          key={i} 
          onClick={this.alteraMenu.bind(this, x.titulo)} 
          className={this.state.menuAtivo === x.titulo ? 'active' : ''}>
          <a href={x.link}>{x.titulo}</a>
        </li>
      )
    );

    return (
      <ul id="nav-mobile" className="right">
        {menuLinks}
      </ul>
    );
  }
}

export default NavMenu;