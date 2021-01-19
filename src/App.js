import React, {Component} from 'react';
import Home from './contenedores/Home/Home';
import Watch from './contenedores/Watch/Watch';
import Trending from './contenedores/Trending/Trending';
import Search from './contenedores/Search/Search';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {youtubeLibraryLoaded} from './store/actions/api';
import {AppLayout} from './componentes/Layout/Layout';
import {Route, Switch, withRouter} from 'react-router-dom';

const YTKEY = '';




class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/feed/tendencias" component={Trending}/>
          <Route path="/results" render={() => <Search key={this.props.location.key}/>}/>
          <Route path="/watch" render={() => <Watch key={this.props.location.key}/>}/>
          <Route path="/" component={Home}/>
        </Switch>
      </AppLayout>
    );
  }

    componentDidMount() {
      this.loadYoutubeApi();
    }

      loadYoutubeApi() {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/client.js";

        script.onload = () => {
          window.gapi.load('client', () => {
            window.gapi.client.setApiKey(YTKEY);
            window.gapi.client.load('youtube', 'v3', () => {
              this.props.youtubeLibraryLoaded();
            });
          });
        };

        document.body.appendChild(script);
      }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));
