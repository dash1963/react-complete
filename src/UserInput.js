import React  from 'react';

const UserInput = (props) => {
  return (
    <div>
     <input type="text" 
            onChange={props.changed} 
            value={props.UserName}/>
    </div>
  );
};

export default UserInput;

