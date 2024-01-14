import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Main1 from '../Mainpages/Main1/Main1';
import Main2 from '../Mainpages/Main2/Main2';
import Main3 from '../Mainpages/Main3/Main3';
import Main4 from '../Mainpages/Main4/Main4';
import star from '../image/star.png'
import LinearProgress from '@mui/joy/LinearProgress';

import "./stepper.css"


export default function Steppercomp() {
  let style={
colorPrimary:{color:"white"}
  }
  const [value,setvalue]=React.useState(0)

    const CustomStepIcon = ({ completed }) => {
      return (
        <div style={{ width: 24, height: 24, borderRadius: '50%', background: completed ? 'white' : '#044E69' ,padding:"1em",display:"flex"}}>
         <img src={star} style={{display:'flex',alignItems:"center",justifyContent:"center"}}></img>
        </div>
      );
    };
    
  
  return (
    <><div className="stepper" style={{background: "linear-gradient(90deg, #00334C 0%, #006B88 52%, #009FC0 100%)",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"
    }}><Box sx={{ width: '100%' ,height:"100%",display:'flex',justifyContent:"center",alignItems:"center"}}>
    <Stepper activeStep={value>1?value+2:value+1} 
    completeColor="white"
    completeBarColor="white"
     style={{height:"100%", width:"434px"}}>
    
        <Step  style={{display:'block',flexDirection:'column'}} activeColor="white"
       
         >
          <StepLabel activeColor="white"
    
     completeBarColor="green" StepIconComponent={CustomStepIcon} ><span style={{color:"white"}}>Stage 1</span></StepLabel>
        </Step>
       <div style={{width:"75px",height:"20px",position:"relative",marginLeft:"0",marginBottom:"8px",color:"white"}}> <LinearProgress
  determinate
  sx={{borderRadius:"0px",color:"white"}}
  size="lg"
 color='action'
  value={value>=0?value==0?0:100:0}
  variant="plain"
  // style={{position:"absolute",zIndex:3,}}
/></div>
       <Step  style={{display:'block',flexDirection:'column'}} activeColor="white"
       
       >
        <StepLabel activeColor="white"
  
   completeBarColor="green" StepIconComponent={CustomStepIcon} ><span style={{color:"white"}}>Stage 2</span></StepLabel>
      </Step>
      <div style={{width:"75px",height:"20px",position:"relative",marginLeft:"0",marginBottom:"8px",color:"white"}}> <LinearProgress
  determinate
  sx={{borderRadius:"0px"}}
  size="lg"
  color="white"
  value={value>=1?value==1?0:100:0}
  variant="plain"
 
/></div>
      <Step  style={{display:'block',flexDirection:'column'}} activeColor="white"
       
       >
        <StepLabel activeColor="white"
  
   completeBarColor="green" StepIconComponent={CustomStepIcon} ><span style={{color:"white"}}>Stage 3</span></StepLabel>
      </Step>
      <div style={{width:"75px",height:"20px",position:"relative",marginLeft:"0",marginBottom:"8px",color:"white"}}> <LinearProgress
  determinate
  sx={{borderRadius:"0px"}}
  size="lg"
  color="white"
  value={value>=2?value==2?0:100:0}
  variant="plain"
/></div>
      <Step style={{display:'block',flexDirection:'column'}} activeColor="white"
       
       >
        <StepLabel activeColor="white"
  
   completeBarColor="green" StepIconComponent={CustomStepIcon} ><span style={{color:"white"}}>Stage 4</span></StepLabel>
      </Step>
     
    </Stepper>
  </Box></div>
  <div>{value===0&&<Main1 setvalue={setvalue}></Main1>}
  {value===1&&<Main2 setvalue={setvalue}></Main2>}{value===2&&<Main3 setvalue={setvalue}></Main3>}{value===3&&<Main4 setvalue={setvalue}></Main4>}</div>
  
 
  </>
  );
}