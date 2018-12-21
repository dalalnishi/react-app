import React, { Component } from 'react';
import Person from './Person/Person';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <h1>{this.props.name}</h1>
      </div>
    );
  }
}

class Test extends Component{
    
    state={        
        persons:[
            { name: 'Hezal', age: 20 },
            { name: 'Nish', age: 20 },
            { name: 'Meet', age: 21 }
        ]
        //count:0
    };
        
    switchNames=()=>{
        this.setState({
            persons:[
                { name: 'Hezal', age: 20 },
                { name: 'Sneha', age: 22 },
                { name: 'Meet', age: 21 }
            ]    
        });
        
        console.log('Clicked!');
        
        //console.log(this.state.count===0?'Zero':this.state.count);
    }

    render(){
        return (
        <div>
            <p>This is paragraph tag</p>
            <button onClick={this.switchNames}>Click Me</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>hobbies: Dancing, Singing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
        );
    }
}

class Demo extends Component{
    render(){
        return (React.createElement('div',null,React.createElement('h1',null,'Hey There')));
    }
}

export {App, Test, Demo};