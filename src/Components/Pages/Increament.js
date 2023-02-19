import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

export const Increament = () => {
    const dispatch = useDispatch()

    const handleIncreament = () => {
        dispatch({
            type: "COUNT_INCREAMENT",
            payload: 1
        })
    }

    
    return (

        <div>
            <Button variant="contained" color="success"
                onClick={handleIncreament}>Increament </Button>
        </div>
    )
}