import React from 'react';
import './Person.css';
const person = (props) => {
    const style = {
        '@media (minWidth: 500px)':
        {
            width :'450px'
        }
    };
 return (
 
<div className="Person" style={style}>
<p onClick={props.click}>I'm a {props.name} and I am  {props.age} years old!</p>
<p>{props.children}</p>
<input onChange = {props.nameChangeHandler} value={props.name}></input>
</div>
 )
};

export default person;