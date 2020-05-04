import React, { Component, useState } from 'react';
import { Preview } from './Preview';
import { Note } from './interfaces'

interface Props {
  setNotes: Function;
  notes: Note[];
}

export const FormComp: React.FC<Props> = ({
  setNotes,
  notes,
}) => {

  const [text, setText] = useState<string>('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
      text,
      complete: false,
      }
    ]);
    setText('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add new note" onChange={handleChange} value={text}/>
        <input type="submit"/>
      </form>
      <Preview text={text} />
    </div>
  );
}