import React from 'react';
import { Note } from './interfaces';

interface Props extends Note {
  edit: boolean;
  index?: number;
  setNotes: Function;
  notes: any;
}

export const FuncComp: React.FC<Props> = ({
  complete,
  text,
  edit,
  index,
  setNotes,
  notes,
}) => {
  return (
    <li className='note'>
      <span>
        {text}
      </span>
      {
        edit
        ? <button onClick={() => {
          const newNotes = [...notes]
          setNotes(newNotes.splice(index))
        }}>X</button> : <div></div>
      }
    </li>
  );
}