import React from "react";
import "./components/style.css"
import { Button, Rating } from "@mui/material";
function App() {
  return (
    <div className='main'>
<Button variant="contained" color="error">Trem</Button>
<br />
      <Rating value={1}></Rating>
      <br />
      <Rating value={2}></Rating>
      <br />
      <Rating value={3}></Rating>
      <br />
      <Rating value={4}></Rating>
      <br />
      <Rating value={5}></Rating>
      <br />
    </div>
    
  );
}

export default App;
