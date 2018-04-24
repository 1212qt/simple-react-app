import React, { Component } from 'react';
import './App.css';
import _ from 'lodash'

class App extends Component {
  state = {
    item: null
  }
  render() {
    return (
      <div className="App">
        <ul style={{listStyleType:'none'}}>
          {
            _.times(10).map(n => (
              <li style={{cursor:'pointer'}}
              onClick={() => this._onItemClick(n)}>
                {`Strona: ${n}.`}
              </li>
            ))
          }
        </ul>
        {
          this.state.item && (
            <strong>
              {`Aktywny item: ${this.state.item}`}
            </strong>
          )
        }
      </div>
    );
  }
  _onItemClick = n => {
    this.setState({
      ...this.state,
      item: n
    })
  }
}

export default App;
