import React from 'react';
import './Rating.scss';
import {Icon, Progress} from "semantic-ui-react";
import {getShortNumberString} from '../../services/number/number-format';

export function Rating(props) {
  let likes = null;
  let likeCount = props.likeCount !== 0 ? props.likeCount : null;
  let dislikeCount = null;

    if(props.likeCount && props.dislikeCount) {
      const cuentaDeLikes = parseFloat(props.likeCount);
      const cuentaDeDislikes = parseFloat(props.dislikeCount);
      const percentagePositiveRatings = 100.0 * (cuentaDeLikes / (cuentaDeLikes + cuentaDeDislikes));
      likeCount = getShortNumberString(cuentaDeLikes);
      dislikeCount = getShortNumberString(cuentaDeDislikes);
      likes = <Progress percent={percentagePositiveRatings} size='tiny'/>;
    }
    return (
      <div className='likes'>
        <div >

          <Icon name='thumbs outline up'/>
          <span>{likeCount}</span>

        </div>
        <div >

          <Icon name='thumbs outline down'/>
          <span>{dislikeCount}</span>
          
        </div>
        {likes}
      </div>
    );
  }