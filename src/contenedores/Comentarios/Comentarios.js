import React from 'react';
import {Cabesa} from "./CabezeraComentario/CabezeraComentario";
import {Coment} from './Comentario/Comentario';


export class Comments extends React.Component {
  render() {
    if (!this.props.comments) {
      return <div/>;
    }

    const comments = this.props.comments.map((comment) => {
      return <Coment comment={comment} key={comment.id}/>
    });

    return(
      <div>
        <Cabesa amountComments={this.props.amountComments}/>

        {comments}
      </div>
    );
  }
}