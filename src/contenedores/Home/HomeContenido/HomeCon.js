import React from 'react';
import './HomeCon.scss';
import {getMostPopularVideos, getVideosByCategory} from '../../../store/reducers/videos';
import {connect} from 'react-redux';
import {InfiniteScroll} from '../../../componentes/Scroll/Scroll';
import {VideoGrid} from '../../../componentes/VideoGrid/VideoGrid';

const videosTrending = 8;

export class HomeCon extends React.Component {
  render() {
    const trendingVideos = this.getTrendingVideos();
    const categoryGrids = this.getVideoGridsForCategories();

    return (
      <div className='home-content'>
        <div className="responsive-video-grid-container">
          <InfiniteScroll bottomReachedCallback={this.props.bottomReachedCallback} showLoader={this.props.showLoader}>
            <VideoGrid title='Trending' videos={trendingVideos}/>
            {categoryGrids}
          </InfiniteScroll>
        </div>
      </div>
    );
  }

      getTrendingVideos() {
        return this.props.mostPopularVideos.slice(0, videosTrending);
      }

          getVideoGridsForCategories() {
            const categoryTitles = Object.keys(this.props.videosByCategory || {});
            return categoryTitles.map((categoryTitle,index) => {
              const videos = this.props.videosByCategory[categoryTitle];
              const hideDivider = index === categoryTitles.length - 1;
              return <VideoGrid title={categoryTitle} videos={videos} key={categoryTitle} hideDivider={hideDivider}/>;
            });
          }
}



function mapStateToProps(state) {
  return {
    videosByCategory: getVideosByCategory(state),
    mostPopularVideos: getMostPopularVideos(state),
  };
}




export default connect(mapStateToProps, null)(HomeCon);