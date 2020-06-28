import React from 'react';
import {VideoPreview} from '../VideoPreview/VideoPreview';
import './RelatedVideos.scss';
import {NextUpVideo} from './NextUpVideo/NextUpVideo';

export function RelatedVideos(props) {
  if (!props.videos || !props.videos.length) {
    return <div className='related-videos'/>;
  }

  const nextVideo = props.videos[0];
  const restante = props.videos.slice(1);

  const relatedVideoPreviews = restante.map(relatedVideo => (
      <VideoPreview video={relatedVideo}
                    key={relatedVideo.id}
                    pathname='/watch'
                    search={`?v=${relatedVideo.id}`}
                    horizontal={true}/>
  ));

  return (
    <div className='related-videos'>
      <NextUpVideo video={nextVideo}/>
      {relatedVideoPreviews}
    </div>
  );
}