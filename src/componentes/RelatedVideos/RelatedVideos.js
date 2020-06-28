import React from 'react';
import {VideoPreview} from '../VideoPreview/VideoPreview';
import './RelatedVideos.scss';


export function RelatedVideos(props) {
  if (!props.videos || !props.videos.length) {
    return <div className='related-videos'/>;
  }

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
      {relatedVideoPreviews}
    </div>
  );
}