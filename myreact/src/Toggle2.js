import React from 'react';
import Person from './Person/Person';

class Toggle2 extends React.Component{
    
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
        
        let p=null;
        
        /*if(this.state.showPersons){
            p=(<div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>hobbies: Dancing, Singing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div> ); 
        } or below one */
        
        if(this.state.showPersons){
             p=(<div>
                { 
                 this.state.persons.map(person)=>{
                    return <Person name={person.name} age={person.age}/>
                 }
                }
                
            </div> 
           ); 
        }
        
        return (
        <div>
            <p>This is paragraph tag</p>
            <button onClick={this.tglNames}>Click Me</button>
            { p }
        </div>
        );
    }
}

export default Toggle2;