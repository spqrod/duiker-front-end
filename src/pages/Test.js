import React, { useState } from "react";
function Test () {

    const handleInputChange = (e) => {
        alert(e.target.name);
    }

    const [firstName, setFirstName] = useState(''); // Declare a state variable...
    return (
        
            
            
            
        <div>
        <h1>Test page</h1>
        <input
          value={firstName}
          type="text"
          onChange={e => setFirstName(e.target.value)} 
          name="fullName"
        />

        {/* <input type="text" name='name' id='name' onChange={handleInputChange}/> */}

    </div>
   
  );
}

export default Test;