import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Radium , {StyleRoot} from 'radium';
import Person from './Person/Person';
import './Person/Person.css';


import UserInput from './UserInput';


class App extends Component {
  state = {
    persons: [
              {id: '10', name: 'Serge', age: 54 },
              {id: '11', name: 'Anita', age: 45 },
              {id: '12', name: 'Zoey', age: 38 },      
             ],
    otherState: 'Some other value',
    showPersons: false
  };



  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {    
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


     this.setState({ persons: persons })   

  }

  deletePersonHandler = (personIndex) => {
     //const persons = this.state.persons.slice();
     // or
     const persons = [...this.state.persons];
     persons.splice(personIndex,1);
     this.setState({persons: persons});   
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow })
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '18px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
       persons = (
            <div>
            {this.state.persons.map((person, index) => {
                 return <Person
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age} 
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)}
                      />
            })}
            </div> 
       );
       style.backgroundColor = '#E4007C';
       style[':hover'] = {
        backgroundColor: 'pink',
        color: 'black'
      }
    }

  let classes = [];
  if (this.state.persons.length <= 2) {
    classes.push('red');
  }

  if (this.state.persons.length <= 1) { 
    classes.push('bold');
  }

    return (
      <StyleRoot>
      <div className="App">
        <p className={classes.join(' ')}>This is really working!</p>
        <button
         style={style}
         onClick={() =>this.togglePersonsHandler('Serginho Ruedinha')}>Switch Name </button>

         {persons}       

      </div>
      </StyleRoot>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I \'m a React App!!' ));
  }
}

export default Radium(App);
