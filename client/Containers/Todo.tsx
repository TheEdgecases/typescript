import React from 'react';

interface Props {
  key: number,
  todos: string
}


const Todo: React.FC<Props> = () => {
  
  function deleteItem(e) {
    e.preventDefault();
  }

  return (
    <div>
      { this.props.todos }
      <button onClick={ deleteItem }>X</button>
    </div>
  )
}


export default Todo;