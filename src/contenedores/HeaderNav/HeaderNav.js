import React from 'react';
import {Form, Image, Input, Menu} from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../assets/images/logo.png';
import {Link, withRouter} from 'react-router-dom';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  render() {

    return (
      
      <Menu borderless className='top-menu' fixed='top'>

        <Menu.Item header className='logo'>
          <Link to='/'><Image src={logo} size='tiny'/></Link>
        </Menu.Item>
        
        <Menu.Menu className='nav-container'>
          <Menu.Item className='search-input'>
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <Input placeholder='Buscar en la pinguvision'
                       size='small'
                       action='Buscar'
                       value={this.state.query}
                       onChange={this.onInputChange}
                />
              </Form.Field>
            </Form>
          </Menu.Item>
          
        </Menu.Menu>
      </Menu>
    );
  }

  onInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  onSubmit = () => {
    const escapedSearchQuery = encodeURI(this.state.query);
    this.props.history.push(`/results?search_query=${escapedSearchQuery}`);
  };
}

export default withRouter(Nav);
