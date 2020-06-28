import React from 'react';
import './Layout.scss';
import HeaderNav from '../../contenedores/HeaderNav/HeaderNav';
import ScrollToTop from '../ScrollToTop/ScrollToTop';



export function AppLayout(props) {
  return (
    <ScrollToTop>
      <div className='app-layout'>
        <HeaderNav/>
        {props.children}
      </div>
    </ScrollToTop>
  );
}