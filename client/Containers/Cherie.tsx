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
//   name: string,
//   age: number
// }

// type Props = {
// name: string,
// age: number,  
// }


  const Cherie: React.FC = () => {

  const [items, setItem] = useState<any>([]);


    return (
      <div id="list">
        <h1 style={ styles.h1 }>Cherizzle's To Do List</h1>
        <form onSubmit={(e)=>{ 
          e.preventDefault();
          // how are you suppose to grab the input value???
          console.log('onSubmit e:', e)
          }}>
        
        <input type="text"/> 
        <button type="submit">Add</button>
        </form>

        <h4 style={ styles.h4 }>Current List:</h4>
        <ul>
          {
            items.map((item, index)=>{
            <li><Todo key={index} todos={item}/></li>
            })
          }
        </ul>
      </div>
    )
}

export default Cherie;

const styles = {
  h1: {
    fontFamily: 'courier',
    fontSize: '2rem',
    color: '#77815c'
  },
  h4: {
    fontFamily: 'courier',
    fontSize: '1rem',
    color: "#31057a"
  }
}