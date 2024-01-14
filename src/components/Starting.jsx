import React from 'react'
import { Grid, Stack, Button,Card, Typography,CardContent,CardActions, TextField, InputAdornment, OutlinedInput, Box,  IconButton } from '@mui/material';
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import stock from './img/adf.png'
import Cash from './img/cash.png'
import budget from './img/budget.png'
const Starting = ({isramining}) => {
  return (
    <div>
    <Stack sx={{paddingTop:"50px"}}>
    <Grid container  gap={2} sx={{justifyContent: {lg:"",xs:"space-between",md:""}}} >
    <Grid item paddingBottom={3} xs={3.5}  lg={3.5} md={5.5} sm={8}>
        <Card sx={{ padding:{lg:"1.5rem"} ,paddingY:"1rem" }}>
            <CardContent>
                <Stack direction={"row"} style={{justifyContent:'center',display:"flex",alignItems:"center"}}>
                <img src={budget} alt="fghjk" style={{width:"48px",height:"47px",color:"#009FC0",padding:"5px"}}/>
                <Typography className='cardheader' >
                    {isramining ? "Overall Bonus Pool Budget:":"Overall Bonus Pool Budget:"}
                </Typography>
                </Stack>
                <Typography className='cardbottom'sx={{marginTop:"20px",textAlign:"center"}} >
                $1,000,000
                </Typography>
            </CardContent>
        </Card>
    </Grid>

    <Grid item paddingBottom={3} xs={3.5}  lg={3.5} md={5.5} sm={8}>
        <Card sx={{ padding:{lg:"1.5rem"} ,paddingY:"1rem"}}>
            <CardContent>
                <Stack direction={"row"} style={{justifyContent:'center',display:"flex",alignItems:"center"}}>
                <img src={Cash} alt="fghjk" style={{width:"48px",height:"47px",color:"#009FC0",padding:"5px"}}/>
                
                <Typography className='cardheader' >
                {isramining ? " Reamining Amount in Cash:":"Amount allocated to Cash:"}
                </Typography>
                </Stack>
                <Typography className='cardbottom'sx={{marginTop:"20px",textAlign:"center"}} >
                $25,00,000
                </Typography>
            </CardContent>
        </Card>
     </Grid>
    <Grid item paddingBottom={3} xs={3.5}  lg={3.5} md={5.5} sm={8}>
           <Card sx={{ padding:{lg:"1.5rem"} ,paddingY:"1rem" }}>
                <CardContent>
                    <Stack direction={"row"} style={{justifyContent:'center',display:"flex",alignItems:"center"}}>
                    <img src={stock} alt="fghjk" style={{width:"48px",height:"47px",color:"#009FC0",padding:"5px"}}/>
                    <Typography className='cardheader' >
                    {isramining ? " Reamining Amount in Stock:":"Amount allocated to Stock:"}
                    
                    </Typography>
                    </Stack>
                    <Typography className='cardbottom'sx={{marginTop:"20px",textAlign:"center"}} >
                    $75,00,000
                    </Typography>
                </CardContent>
           </Card>
    </Grid>   
            </Grid>  
        </Stack>
      
    </div>
  )
}

export default Starting
