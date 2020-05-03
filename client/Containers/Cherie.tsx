import { useState } from 'react';
import * as React from 'react';
import Todo from './Todo'

// COMPONENTS
// React.Node for function declarations
// React.FC for function components 
  // function Cherie({ name, age } : Props): React.ReactNode {
  // }

// PROPS
// Define with interface or type 

// interface Props {
//   todo: any
// }

// type Props = {
// name: string,
// age: number,  
// }

  const Cherie: React.FC = () => {

  const [item, setItem] = useState([]);

  const todos = [];
  for (let i = 0; i < item.length; i++){
    todos.push(<Todo key={i} todos={ this.state.item[i] } />)
  }

    return (
      <div id="list">
        <h1 style={ styles.h1 }>Cherizzle's To Do List</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          setItem(item.push(e.target))
        }}>
        
        <input type="text"></input> 
        <button type="submit">Add</button>
        
        { todos }

        </form>
      </div>
    )
}

export default Cherie;

const styles = {
  h1: {
    fontFamily: 'courier',
    fontSize: '2rem',
    color: '#77815c'
  }
}