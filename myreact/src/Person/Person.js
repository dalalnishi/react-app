import React from 'react';
import './Person.css';

const Person =(props)=>{
    return (
        <div className='Person'>
        <p onClick={props.click}>I am {props.name}. I am {props.age} years old.</p>
        <input type="text"  value={props.name} onChange={props.changed} />
        <p>{props.children}</p>
        </div>
    );
};

export default Person;