import React from 'react';
import './Comentario.scss';
import {Image} from "semantic-ui-react";
import {Rating} from '../../../componentes/Rating/Rating';

export function Comment(props) {
  if (!props.comment) {
    return <div/>;
  }
  const topLevelComment = props.comment.snippet.topLevelComment;
  const {authorProfileImageUrl, authorDisplayName, textOriginal} = topLevelComment.snippet;
  const likeCount = topLevelComment.snippet.likeCount;

  return (
    <div className='comment'>
      <Image className='user-image' src={authorProfileImageUrl} circular />
      <div>
        <div className='user-name'>{authorDisplayName}</div>
        <span>{textOriginal}</span>
        <div className='comment-actions'>
          <Rating likeCount={likeCount}/> 
        </div>
      </div>
    </div>
  );
}