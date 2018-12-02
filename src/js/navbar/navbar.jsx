import React from 'react';
import NavMenu from './nav-menu';
import menus from './menus';

class Navbar extends React.Component
{

  constructor(props){
    super(props);
    this.state = {menus: []};
  }

  componentDidMount() {
    menus.then(response => {
      this.setState({menus: response.data});
    });
  }

  render() {
    let corNav = `nav-wrapper ${this.props.cor}`;
    
    return (
      <nav>
        <div className={corNav}>
          <div className="container">
            <a href="#" className="brand-logo">{this.props.titulo}</a>
              <NavMenu menu={this.state.menus}/>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;