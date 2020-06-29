import React from 'react';
import Item from './Item/Item';
import {Menu, Divider} from 'semantic-ui-react';
import './BarraLateral.scss';
import {Subs} from './Subs/Subs';


export class Lateral extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>

        <Item path='/' label='Home' icon='home'/>
        <Item path='/feed/tendencias' label='Tendencias' icon='fire'/>
        <Item label='FBI' icon='spy'/>
        <Divider/>

        <Item label='Historial' icon='history'/>
        <Item label='Mirar más tarde' icon='clock'/>
        <Item label='No mirar nunca' icon='low vision'/>
        <Item label='Videos que me gustan' icon='thumbs up'/>
        <Divider/>

        <Subs/>

      </Menu>
    );
  }
}