import React from 'react';
import Person from './Person/Person';
import './App.css';
import Radium from 'radium';
import './Person/Person.css';

class Toggle2 extends React.Component{
    
    state={        
        persons:[
            { id: '1', name: 'Hezal', age: 20 },
            { id: '2', name: 'Nish', age: 20 },
            { id: '3', name: 'Meet', age: 21 }
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
    };
    
    /*changeName = (event) =>{
         this.setState({
            persons:[
                { name: 'Hezal', age: 20 },
                { name: event.target.value, age: 22 },
                { name: 'Meet', age: 21 }
            ]    
        });
    };*/

    //To update
    changeName = (event,id) =>{
        const pid=this.state.persons.findIndex(pd=>pd.id===id);
        
        const person={
            ...this.state.persons[pid]    
        };
        
        person.name=event.target.value;
        
        const ps=[...this.state.persons];
        ps[pid]=person;
        
        this.setState({persons:ps});
    };

    tglNames = () =>{
        const showstat = this.state.showPersons;
        this.setState({showPersons : !showstat });
    };
    
    
    deletePerson = (pindex) => {
        const p = this.state.persons;
        
        p.splice(pindex,1);
        this.setState({persons:p});
    };

    render(){
        
        let p=null;
        
        //for toggling on the click of a button
        /*if(this.state.showPersons){
            p=(<div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>hobbies: Dancing, Singing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div> ); 
        } or below one */
        
        /*if(this.state.showPersons){
             p=(<div>
                { 
                 this.state.persons.map(person)=>{
                    return <Person name={person.name} age={person.age}/>
                 }
                }
                
            </div> 
           ); 
        }*/
        
        const style={
            backgroundColor: 'green',
            ':hover': {
                backgroundColor: 'lightgreen'
            }
        };
        
        let classes=['red','bold'].join(' ');
        
        //delete person
        if(this.state.showPersons){
             p=(
                 <div>
                {    this.state.persons.map((person,index)=>{
                        //return <Person name={person.name} age={person.age} key={person.id} changed={this.changeName} click={this.deletePerson.bind(index)}/>
                        return <Person name={person.name} age={person.age} key={person.id} changed={(e)=>{this.changeName(e,person.id)}} click={this.deletePerson.bind(index)}/>
                    }   
                 
                )}
                
            </div> 
           ); 
            style.backgroundColor = 'red';
            style[':hover']={
                backgroundColor: 'salmon'
            }
        }
        
        return (
        <div>
            <p className={classes}>This is paragraph tag</p>
            <button onClick={this.tglNames} style={style}>Click Me</button>
            { p }
        </div>
        );
    }
}

export default Radium(Toggle2);