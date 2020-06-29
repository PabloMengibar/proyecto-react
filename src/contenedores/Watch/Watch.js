import React from 'react';
import {bindActionCreators} from 'redux';
import * as watchActions from '../../store/actions/watch';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import WatchCon from './WatchCon/WatchCon';
import {getSearchParam} from '../../services/url';
import {getChannelId} from '../../store/reducers/videos';
import {getCommentNextPageToken} from '../../store/reducers/comments';
import * as commentActions from '../../store/actions/comment';


export class Watch extends React.Component {
  render() {
    const videoId = this.getVideoId();
    return (
      <WatchCon videoId={videoId} channelId={this.props.channelId} bottomReachedCallback={this.fetchMoreComments}
      nextPageToken={this.props.nextPageToken}/>
    );
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchCon();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchCon();
    }
  }

  getVideoId() {
    return getSearchParam(this.props.location, 'v');
  }

  fetchWatchCon() {
    const videoId = this.getVideoId();
    if (!videoId) {
      this.props.history.push('/');
    }
    this.props.fetchWatchDetails(videoId, this.props.channelId);
  }

  fetchMoreComments = () => {
    if (this.props.nextPageToken) {
      this.props.fetchCommentThread(this.getVideoId(), this.props.nextPageToken);
    }
  };
}

function mapStateToProps(state, props) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    channelId: getChannelId(state, props.location, 'v'),
    nextPageToken: getCommentNextPageToken(state, props.location),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  const fetchCommentThread = commentActions.thread.request;
  return bindActionCreators({fetchWatchDetails, fetchCommentThread}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));