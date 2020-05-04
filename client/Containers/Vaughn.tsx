import React, { Component } from 'react';
import { NoteGen } from '../vaughn/NoteGen';

interface State {
  edit: boolean;
}

class Vaughn extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    }
  }

  render (){
    return (
      <div>
        <button onClick={() => this.setState({...this.state, edit: !this.state.edit})}>EDIT</button>
        <NoteGen edit={this.state.edit} />
      </div>
    )
  }
}

export default Vaughn;