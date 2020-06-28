import React from 'react';
import {Subscription} from "./Subscription/Subs";
import {Divider} from "semantic-ui-react";


export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Subscription label='Canales de Pinguvision' broadcasting/>
        <Subscription label='Esto' amountNewVideos={10}/>
        <Subscription label='es' amountNewVideos={23}/>
        <Subscription label='un' amountNewVideos={4}/>
        <Subscription label='bait' amountNewVideos={54}/>
        <Divider/>
      </React.Fragment>
    );
  }
}