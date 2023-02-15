import React from "react";
import { useState } from "react";

export const Counter =( ) => {
    const [count ,setCount ]= useState(0)


return(

    <div>
        <h1>Counter</h1>
        <h1>{count}</h1>
    </div>
    
)
}