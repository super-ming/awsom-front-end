import React from 'react';
import { push } from 'actions/index';

class HeaderMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

  };

  showMenu() {
    this.setState(
      { showMenu: !this.state.showMenu }
    );
  }

  closeMenu(event) {
    this.setState({ showMenu: false }
    );
  }

  render() {
    const dropdown = this.props.subMenu;
    return (
          <li>
            <div className="folder" key={ this.props.id }>
            { dropdown ? (
                <div className="toggle" key={ this.props.id } onClick={ this.showMenu }
                >{ this.props.title }
                <div className={`subnav ${ this.state.showMenu ? 'open' : '' }`} key={ dropdown.id }>
                  { dropdown.map((dropdown) =>
                        <a href={ dropdown.url }>{ dropdown.title }</a>
                    )
                  }
                </div>
                </div>
              ) :
               (
               <a href={ this.props.url }>{ this.props.title }</a>
               )
            }
            </div>
          </li>
          )
          }
}

export default HeaderMenu
