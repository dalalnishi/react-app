import React from 'react';

class Testinput extends React.Component{
    
    state={
        name:'',
        age:''
    };
    
     statechange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value      
            
        });
         console.log(event.target.value);
    }
     
     dispData = () =>{
        
        alert(this.state.name+" "+this.state.age);

    }
    
    render(){
        return (
            <div>
                <input type="text" placeholder="Name" name="name" onChange={this.statechange} value={this.state.value}/>
                <input type="text" placeholder="Age" name="age" onChange={this.statechange} value={this.state.value}/>
                <button onClick={this.dispData}>Submit</button>
            </div>
        );
    }
}

export default Testinput;