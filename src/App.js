import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = 
  {
    persons: [
      {id:1, name: 'Manu', age: 29},
      {id:2, name: 'Max', age: 28},
      {id:3,name: 'Paul', age: 25}
    ],
    showPersons : false
  }
  deletePersonHandler = (index) =>
  { const persons = this.state.persons.slice();
    //const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState(
      {
        persons : persons
      }
    )
  }
  nameChangeHandler = (event,id) => {
    const index = this.state.persons.findIndex(p => {return p.id ===id;});
    const person =this.state.persons[index];
    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[index] = person;

    this.setState(
      {
        persons:persons 
      }
    )
  }

  togglePersonHandler = () => {
    let isShowwing = this.state.showPersons;
    this.setState({ showPersons: !isShowwing })
  }

  render() {
    const style =
    {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPersons)
    {
      persons = (
        <div>{
        this.state.persons.map((p,index) => 
          {
            return <Person name={p.name} age={p.age} key={p.id} click={this.deletePersonHandler.bind(this,index)}  nameChangeHandler ={(event) =>this.nameChangeHandler(event,p.id)} /> 
          })
        }</div>
      )
    }

    const classes = [];
    
    if(this.state.persons.length <= 2)
    {
      classes.push('red');
    }

    if(this.state.persons.length <= 1)
    {
      classes.push('bold');
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className={classes.join(' ')}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button style={style} onClick={this.togglePersonHandler}>Change</button>   
        {persons}
      </div>
    );
  }
}

export default App;
