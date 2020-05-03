import React from 'react';

interface Props {
  todos: any
}

function Todo ({ todos: any }): React.ReactNode {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <div>
      { this.props.todo }
      <button onClick={ handleClick }>X</button>
    </div>
  )
}


export default Todo;