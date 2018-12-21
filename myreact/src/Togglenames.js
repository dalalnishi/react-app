import React from 'react';
import Person from './Person/Person';

class Togglenames extends React.Component{
    
    state={        
        persons:[
            { name: 'Hezal', age: 20 },
            { name: 'Nish', age: 20 },
            { name: 'Meet', age: 21 }
        ],
        showPersons : false
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
    }
    
    tglNames = () =>{
        const showstat = this.state.showPersons;
        this.setState({showPersons : !showstat });
    }

    render(){
        return (
        <div>
            <p>This is paragraph tag</p>
            <button onClick={this.tglNames}>Click Me</button>
            {
                this.state.showPersons === true ?
            <div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>hobbies: Dancing, Singing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div> : null
            }
        </div>
        );
    }
}

export default Togglenames;