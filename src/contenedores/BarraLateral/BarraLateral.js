import React from 'react';
import SideBarItem from './Item/Item';
import {Menu, Divider} from 'semantic-ui-react';
import './BarraLateral.scss';
import {Subscriptions} from './Subs/Subs';


export class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SideBarItem path='/' label='Home' icon='home'/>
        <SideBarItem path='/feed/tendencias' label='Tendencias' icon='fire'/>
        <SideBarItem label='FBI' icon='spy'/>
        <Divider/>
        <SideBarItem label='Historial' icon='history'/>
        <SideBarItem label='Mirar más tarde' icon='clock'/>
        <SideBarItem label='No mirar nunca' icon='low vision'/>
        <SideBarItem label='Videos que me gustan' icon='thumbs up'/>
        <Divider/>
        <Subscriptions/>
      </Menu>
    );
  }
}