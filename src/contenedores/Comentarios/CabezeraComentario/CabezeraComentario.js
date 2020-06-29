import React from 'react';
import {Button} from "semantic-ui-react";
import './CabezeraComentario.scss';

export function Cabesa(props) {
  return (
    <div className='comments-header'>
      <h4>{props.amountComments} Comentarios</h4>
      <Button basic compact icon labelPosition='left'>
      </Button>
    </div>
  );
}