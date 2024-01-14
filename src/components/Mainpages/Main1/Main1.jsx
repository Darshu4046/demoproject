import React from 'react'
import Starting from '../../Starting'
import { Button } from '@mui/material'

const Main1 = ({setvalue}) => {
  let incres=()=>{
    setvalue(pev=>pev+1);
    }
    let decrese=()=>{
        setvalue(pev=>pev-1);
    }
  return (
    <div className='App'>
      <Starting/>
      <div style={{width:"100%",marginTop:"22px"}}>
        <Button style={{float:"right",cursor:"pointer",padding:"16px 60px 16px 58px",backgroundColor:"#FFB100",color:'#00334C',fontWeight:"700",borderRadius:"31px"}}  variant="contained" onClick={incres}>Allocate Bonus</Button>
  </div>
    </div>
  )
}

export default Main1