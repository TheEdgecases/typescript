import React, { useState } from 'react';
import { FuncComp } from './FuncComp';
import { FormComp } from './FormComp';
import { Note } from './interfaces';

interface Props {
  edit: boolean;
}

export const NoteGen: React.FC<Props> = ({
  edit,
}) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const noteList = [];
  notes.forEach((note, i) => {
    const { text, complete } = note;
    noteList.push(
      <FuncComp
      key={`note${i}`}
      text={text}
      complete={complete}
      edit={edit}
      index={i}
      setNotes={setNotes}
      notes={notes}
      />
    );
  });


  return (
    <div id="noteGen" >
      <FormComp setNotes={setNotes} notes={notes} />
      {noteList}
    </div>
  );
}