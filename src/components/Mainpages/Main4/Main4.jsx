import React from 'react'
import { Button } from '@mui/material';
const Main4 = ({setvalue}) => {
  let incres=()=>{
    setvalue(pev=>pev+1);
    }
    let decrese=()=>{
        setvalue(pev=>pev-1);
    }
    
  return (
    <div>Main4

<div style={{width:"100%"}}>
        <Button sx={{float:"right"}}  variant="contained" onClick={decrese}>Previous</Button>
        <Button sx={{float:"right"}}  variant="contained" onClick={incres}>save</Button>
      </div>
    </div>
  )

  }
export default Main4