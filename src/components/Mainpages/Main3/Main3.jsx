import React from 'react'
import Starting from '../../Starting'
import Tabledata from '../../Tabledata'
import { Button ,Stack,Modal,Typography,Box} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckIcon from '@mui/icons-material/Check';
import bundle from '../../img/Bounding.png'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
const Main3 = ({setvalue}) => {
  let incres=()=>{
    setOpen(true)
    setvalue(pev=>pev+1)
    }
    let decrese=()=>{
        setvalue(pev=>pev-1);
    }
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      borderRadius:"12px"
    };
    
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
  return (
    <div className='App'>
      <Starting isramining={true}/>
      <Stack direction={"row"} justifyContent={"space-between"}>
      <Box sx={{ minWidth: 120,marginBottom:"22px",backgroundClip:"white" }} className='bg-white'>
      <FormControl sx={{width:"250px",backgroundClip:"white" }}>
        <InputLabel id="demo-simple-select-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className='bg-white'
          label="Age"
       
        >
          <MenuItem value={10}>Consolidate</MenuItem>
          <MenuItem value={20}>Entity</MenuItem>
          <MenuItem value={30}>Employee</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Button style={{float:"right",height:"50px",cursor:"pointer",padding:"8px 16px 8px 16px",backgroundColor:"white",color:'#00334C',fontWeight:"500",borderRadius:"8px"}}  variant="contained" > Download  to XLS <FileDownloadOutlinedIcon sx={{marginLeft:"3px",marginBottom:"3px"}}/></Button>
    </Stack>
      <Tabledata/>
      <Stack direction={"row"} justifyContent={'space-between'} style={{width:"100%", marginTop:"22px"}}>
      <Button style={{float:"right",cursor:"pointer",padding:"16px 60px 16px 58px",height:"60px",backgroundColor:"#FFB100",color:'#00334C',fontWeight:"700",borderRadius:"31px"}}  variant="contained" onClick={decrese}>Previous</Button>
      <Stack direction={"row"} gap={3} justifyContent={"right"}  >
        <Button style={{float:"right",cursor:"pointer",padding:"16px 60px 16px 58px",backgroundColor:"#FFB100",color:'#00334C',fontWeight:"700",borderRadius:"31px"}}  variant="contained" onClick={decrese}>Save</Button>
        <Button style={{float:"right",cursor:"pointer",padding:"16px 60px 16px 58px",backgroundColor:"#FFB100",color:'#00334C',fontWeight:"700",borderRadius:"31px"}}  variant="contained" onClick={incres}>Submit</Button>
      </Stack>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='bg-white'
      >
        <Box sx={style}>
          <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} padding={3} paddingX={5}>
            <CheckIcon style={{width:"50px",height:"50px", color:"green",textAlign:"center"}}/>
          <Typography id="modal-modal-description" sx={{ fontSize:"24px",fontWeight:"400",lineHeight:"38px"}}>
          Your submission has been routed to your CFO.
          </Typography>
          </Stack>
        </Box>
       
      </Modal>
    </div>
  )
}

export default Main3