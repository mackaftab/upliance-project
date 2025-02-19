import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCount=()=>{
      if(count>0){
        setCount(count-1)
      }
    }
  
    return (
      <Container sx={{ textAlign: "center",height:"90vh", background: `rgba(35, 255, 145, ${count / 10})`, padding: 4 }}>
        <Typography variant="h4"
        style={{color : "white"}}
        >Counter: {count}</Typography>
        <Button style={{margin:"5px"}} variant="contained" onClick={() => setCount(count + 1)}>Increment</Button>
        <Button style={{margin:"5px"}}  variant="contained" onClick={handleCount}>Decrement</Button>
        <Button style={{margin:"5px"}}  variant="contained" onClick={() => setCount(0)}>Reset</Button>
      </Container>
    );
  }

export default Counter;

