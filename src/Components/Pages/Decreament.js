import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Decreament  =()=> {
 const dispatch =useDispatch( )
 const select  =  useSelector((state)=>state) 
 const count = select.CountReducer.count
 console.log(select.CountReducer.count)  //count ko store se leke ao
    const handleDecreament=()=>{
         dispatch({
            type: "COUNT_DECREAMNET",
            payload: 1
         }) 
    }

    return(
        <div>
        <Button variant="contained" color="error"
        onClick={handleDecreament} disabled={count==0}>Decreament</Button>
        </div>
    )
}