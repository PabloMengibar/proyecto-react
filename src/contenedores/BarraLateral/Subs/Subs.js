import React from 'react';
import {Subscription} from "./Subscription/Subs";
import {Divider} from "semantic-ui-react";


export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Subscription label='Canales de Pinguvision' broadcasting/>
        <Subscription label='Canal 1' amountNewVideos={10}/>
        <Subscription label='Canal 2' amountNewVideos={23}/>
        <Divider/>
      </React.Fragment>
    );
  }
}