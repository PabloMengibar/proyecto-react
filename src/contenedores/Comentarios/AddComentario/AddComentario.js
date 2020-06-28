import React from 'react';
import './AddComentario.scss';
import {Form, Image, TextArea} from "semantic-ui-react";

export function AddComment() {
  return (
    <div className='add-comment'>
      <Image className='user-image' src='http://via.placeholder.com/48x48' circular/>
      <Form>
        <Form.TextArea control={TextArea} autoHeight placeholder='Enviar un comentario' />
      </Form>
    </div>
  );
}