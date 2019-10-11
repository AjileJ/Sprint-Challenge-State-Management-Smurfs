import React from 'react';

const Smurf = props => {
  return (
 <div>
    <p>Name : {props.info.name}</p>
    <p>Height : {props.info.height}</p>
    <p>Age : {props.info.age}</p>
    <p>id : {props.info.id}</p>
 </div>
  )
}

export default Smurf;