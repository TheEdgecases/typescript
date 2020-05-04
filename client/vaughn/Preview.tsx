import React from 'react';

interface Props {
  text: string;
}

export const Preview: React.FC<Props> = ({
  text,
}) => {
  return(
    <div id='Preview'>
      Preview: {text}
    </div>
  )
}