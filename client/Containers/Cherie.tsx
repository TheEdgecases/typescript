import React, { Component, useState } from 'react';

// COMPONENTS
// React.Node for function declarations
// React.FC for function components 
  // const Cherie: React.FC = () => <h1>Cherizzle</h1>

// PROPS
// Define with interface or type 

// HOOKS
const [cherie, setCherie] = useState('');

interface Props {
  name: string,
  age: number
}

// type Props = {
// name: string,
// age: number,  
// }

function Cherie({ name, age } : Props): React.ReactNode {
    return (
      <div>
        <h1>Cherizzle</h1>
      </div>
    )
}

export default Cherie;