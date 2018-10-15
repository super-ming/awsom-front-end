import React from 'react';
import { push } from 'actions/index';

class HeaderMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

  };

  onVisibleChange = (visible) => {
    this.setState({
      visible: true
    });
  }

  saveSelected = ({selectedKeys}) => {
    this.selected = selectedKeys;
  }

  showMenu() {
    this.setState(
      { showMenu: !this.state.showMenu }, () => {
       console.log(this.state.showMenu);
    });

  }

  closeMenu(event) {
    this.setState({ showMenu: false }, () => {
    console.log(this.state.showMenu);
    });
  }

  render() {
    const { showMenu } = this.state;
    const dropdown = this.props.subMenu;
    return (
          <li>
            <div className="folder" key={ this.props.id }>
            { dropdown ? (
                <div className="toggle" key={ this.props.id } active={this.state.showMenu} onSelect={this.saveSelected}
                onDeselect={this.saveSelected} visible={this.state.visible}
                onVisibleChange={this.onVisibleChange}>{ this.props.title }
                <div className={`subnav ${ this.visible ? 'open' : '' }`} key={ dropdown.id }>
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
