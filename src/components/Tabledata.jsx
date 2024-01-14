import React,{useState,useEffect} from 'react'
import { Grid, Stack,Link,Avatar, Button, Typography, TextField, InputAdornment, OutlinedInput, Box,  IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CheckIcon from '@mui/icons-material/Check';
import { deepOrange } from '@mui/material/colors';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import FormControl from '@mui/material/FormControl';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Save, Edit, Cancel, Add, Today } from '@mui/icons-material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';

import Datagridtable from './Datagridtable';
const Tabledata = () => {
    const [istextopen,setistextopen]=useState({})
    const [istextopenstock,setistextopenstock]=useState({})
    const [open, setOpen] = React.useState(false);
    const [displayDate, setDisplayDate] = useState('');
    const [payload, setPayload] = useState("");
    const[maingroupcolor,setmaingroupcolor]=useState("red")
    const [searchText, setSearchText] = useState("")
    const [finacialyearlist,setfinacialyearlist]=useState([])
    const [Finacialyear,setFinacialyear]=useState('')
    const [dateSearch, setDateSearch] = useState(false);
    const [datamaount,setdatamaount]=useState()
    const [dateRange, setDateRange] = useState([
      {
        startDate: null,
        endDate: null,
        key: 'selection'
      }
    ]);
    const [employeamount,setemployeamount]=useState({})
    const handleClose = () => {
      setOpen(false);
    };
    const handleDone = () => {
      const { startDate, endDate } = dateRange[0];
      console.log("dfghjkjhgfdghjkljhgfd",dateRange[0])
      handleChange();
      if(endDate>new Date()){
        setDisplayDate(
          (startDate, 'dd MMM yyyy') +
          ' to ' +
          "till Today"
        );
      }
      else{
        setDisplayDate(
          (startDate, 'dd MMM yyyy') +
          ' to ' +
          (endDate, 'dd MMM yyyy')
        );
      }
      
      setOpen(false);
    };
    const handleChange = () => {
      let filterPayload = [];
      if (searchText !== "") {
        filterPayload.push({
          filterKey: "operationalName",
          value: searchText,
          operation: "cn"
        });
      }
      if (dateRange[0].startDate !== null && dateRange[0].endDate !== null && dateSearch) {
        filterPayload.push({
          filterKey: "createdOn",
        
          operation: "bt",
          dataType: "DATE"
        })
      }
      console.log("Payload", filterPayload)
      setPayload({
        ...payload,
        searchCriteriaList: filterPayload
      });
    }
    const columns = [
        {
            field: 'maingroup',
            // headerName: 'SL number ', 
            headerName: "NAME & JOB TITLE",
            width:200,
            renderCell: params => {
              console.log("outsidesetmaingroupcolor")
             
             
                return (
                <Stack direction={"row"} gap={1}>
                  <Avatar
                    sx={{ bgcolor: deepOrange[500] }}
                      src={params.row.image} />
                      <Stack direction={"column"} >
                      <Typography >{params.row.maingroup}</Typography>
                      <Typography sx={{fontSize:"12px"}}>CEO and funder</Typography>
                      </Stack>
                
                </Stack>
                )
            }
        
        },
        {
            field: 'particulars',
            //  headerName: 'Service type',
            headerName: "CASH BONUS",
            width:150,

            renderCell: params =>{
             let isopen=false
            return (
            istextopen[params.row.maingroup] ? 
            <Stack direction={"row"} gap={1}>
            <TextField id="standard-basic" value={employeamount[params.row.maingroup]}
             onChange={(e)=>setemployeamount({...employeamount,[params.row.maingroup]:e.target.value})}  variant="standard" />
            <Stack direction={"row"} gap={1} sx={{marginTop:"10px"}}>
            <Button aria-label="delete"  sx={{padding:"0px",minWidth:"0px",marginLeft:"3px"}}
             onClick={()=>{setistextopen({...istextopen,[params.row.maingroup]:false})
            
             }}>
            <CheckIcon fontSize='medium' sx={{color:"green"}}/>
            </Button>
            <Button aria-label="delete"  sx={{padding:"0px",minWidth:"0px",marginLeft:"3px"}}
             onClick={()=>{
                setistextopen({...istextopen,[params.row.maingroup]:false})          
             }}>
            <ClearOutlinedIcon fontSize='medium' sx={{color:"red"}}/>
            </Button>
            </Stack>
            </Stack>:
             <Stack direction={"row"} justifyContent={"space-between"} sx={{width:"80%"}}>
               <Typography > ${employeamount[params.row.maingroup] || params.row.particulars.name}</Typography>
            <Button aria-label="delete"  sx={{padding:"0px",minWidth:"0px",marginLeft:"6px"}}
             onClick={()=>{setistextopen({...istextopen,[params.row.maingroup]:true})}}>
                 <BorderColorOutlinedIcon fontSize='medium' sx={{color:"rgba(0,0,0,0.8)"}}/>
              </Button>
            </Stack> 
            ) }
        },
        {
            field: 'OpeningBalance',
            //  headerName: 'Vendor name',
            headerName: "STOCK BONUS",
            width:150,
            renderCell: params =>{
                let isopen=false
              
               
               
               return (
               istextopenstock[`${params.row.maingroup}1`] ? 
               <Stack direction={"row"} gap={1}>
               <TextField id="standard-basic" value={params.row.OpeningBalance.Amount} onChange={()=>"fghj"}  variant="standard" />
               <Stack direction={"row"} gap={1} sx={{marginTop:"10px"}}>
               <Button aria-label="delete"  sx={{padding:"0px",minWidth:"0px",marginLeft:"3px"}}
                onClick={()=>{setistextopenstock({...istextopen,[params.row.maingroup]:true})}}>
               <CheckIcon fontSize='medium' sx={{color:"green"}}/>
               </Button>
               <Button aria-label="delete"  sx={{padding:"0px",minWidth:"0px",marginLeft:"3px"}}
                onClick={()=>{setistextopenstock({...istextopenstock,[`${params.row.maingroup}1`]:true})}}>
               <ClearOutlinedIcon fontSize='medium' sx={{color:"red"}}/>
               </Button>
               </Stack>
               </Stack>:
                <Stack direction={"row"} justifyContent={"space-between"} sx={{width:"80%"}}>
                  <Typography> ${params.row.OpeningBalance.Amount}</Typography>
               <Button aria-label="delete"  sx={{padding:"0px",minWidth:"0px",marginLeft:"6px"}}
                onClick={()=>{setistextopenstock({...istextopenstock,[`${params.row.maingroup}1`]:true})}}>
                    <BorderColorOutlinedIcon fontSize='medium' sx={{color:"#1C1B1F"}}/>
                 </Button>
               </Stack> 
               ) }
            
        },
        ,
        {
            field: 'Debit',
            // headerName: 'Vendor code/ledger code',
            headerName: "Vest",
            width:200,
        },
        {
            field: 'Credit',
            // headerName: 'Vendor code/ledger code',
            headerName: "Title/Seniority",
            width:200,
        },
        ,
        {
            field: 'Debit',
            // headerName: 'Vendor code/ledger code',
            headerName: "Vest",
            width:200,
        },
        {
            field: 'Debit',
            // headerName: 'Vendor code/ledger code',
            headerName: "Vest",
            width:200,
        },
        {
            field: 'ClosingBalance',
            // headerName: 'Vendor code/ledger code',
            headerName: "Total Stock Value",
            width:200,
            renderCell: params => (
                <div>
                  {params.row.ClosingBalance.Amount}{params.row.ClosingBalance.Type}
                </div>
              )
        },
        {
            field: 'ClosingBalance',
            // headerName: 'Vendor code/ledger code',
            headerName: "Total Stock Value",
            width:200,
            renderCell: params => (
                <div style={{paddingLeft:"76px"}}>
                  {params.row.ClosingBalance.Amount}%
                </div>
              )
        },
    ];
    const handleOnCellClick=()=>{

    }
    
   const datalist= [{
     id1:1,
     id:11,
     RowNumber:8,
      maingroup:"Arun k o",
      image:"https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
      particulars:{
          id:"GL1000029",
          name: "1000",
          group: true},
  
      OpeningBalance: {
          Amount:1000,
          Type:'DR'
      },
     
      Debit: "C",
      Credit: 1,
      ClosingBalance: {
          Amount:5,
          Type:'DR'
      },
  },
  {
      id1:2,
      id:1,
      RowNumber:8,
      maingroup:"Darshan K b",
      image:"https://tse2.mm.bing.net/th?id=OIP.Zb5-XDMwL991BL0cXnqj-gHaHa&pid=Api&P=0&h=180",
      particulars:{
          id:"GL1000028",
          name: "2000",
          group: true},
          OpeningBalance: {
              Amount:2000,
              Type:'DR'
          },
         
          Debit: "C",
          Credit: 3,
          ClosingBalance: {
              Amount:10,
              Type:'DR'
          },
  },
  {id1:3,
    id:2,
      maingroup:"Abhishek",
      image:"https://tse1.mm.bing.net/th?id=OIP.w6Cs6qz234c71XloeqKdwgHaHa&pid=Api&P=0&h=180",
      particulars:{
          id:"GL1000027",
          name: "1500",
          group: true},
          OpeningBalance: {
              Amount:0,
              Type:'DR'
          },
         
          Debit: 0.0,
          Credit: 0.0,
          ClosingBalance: {
              Amount:0,
              Type:'DR'
          },
  }
  ,{id1:4,
    id:3,
      maingroup:"Vinay",
      image:"https://tse1.mm.bing.net/th?id=OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa&pid=Api&P=0&h=180",
      particulars:{
          id:"GL1000026",
          name: "20",
          group: true},
          OpeningBalance: {
              Amount:1000,
              Type:'DR'
          },
         
          Debit: "C",
          Credit: 4,
          ClosingBalance: {
              Amount:10,
              Type:'DR'
          },
  },{id1:5,
    id:4,
      maingroup:"Sachin",
      image:"https://tse1.mm.bing.net/th?id=OIP.w6Cs6qz234c71XloeqKdwgHaHa&pid=Api&P=0&h=180",
      particulars:{
          id:"AC1000001",
          name: "2000",
          group: false},
          OpeningBalance: {
              Amount:0,
              Type:'DR'
          },
         
          Debit: 0.0,
          Credit: 0.0,
          ClosingBalance: {
              Amount:0,
              Type:'DR'
          },
  },
  {id1:6,
    id:5,
      maingroup:"Guru",
      image:"https://tse1.mm.bing.net/th?id=OIP.w6Cs6qz234c71XloeqKdwgHaHa&pid=Api&P=0&h=180",
      particulars:{
          id:"GL1000014",
          name: "1000",
          group: true},
          OpeningBalance: {
              Amount:0,
              Type:'DR'
          },
         
          Debit: 0.0,
          Credit: 0.0,
          ClosingBalance: {
              Amount:0,
              Type:'DR'
          },
  },{
    id1:7,
    id:6,
      maingroup:"Sanjay",
      image:"https://tse1.mm.bing.net/th?id=OIP.w6Cs6qz234c71XloeqKdwgHaHa&pid=Api&P=0&h=180",
      particulars:{
          id:"GL1000013",
          name: "2000",
          group: true},
          OpeningBalance: {
              Amount:0,
              Type:'DR'
          },
         
          Debit: 0.0,
          Credit: 0.0,
          ClosingBalance: {
              Amount:0,
              Type:'DR'
          },
  },{
    id1:8,
    id:7,
      maingroup:"Sagar",
      image:"https://tse2.mm.bing.net/th?id=OIP.Zb5-XDMwL991BL0cXnqj-gHaHa&pid=Api&P=0&h=180",
      particulars:{
          id:"GL1000012",
          name: "0",
          group: true},
          OpeningBalance: {
              Amount:0,
              Type:'DR'
          },
         
          Debit: 0.0,
          Credit: 0.0,
          ClosingBalance: {
              Amount:0,
              Type:'DR'
          },
  },{
    id1:12,
    id:8,
      maingroup:"Kavya",
      image:"https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0&h=180",
      particulars:{
          id:"GL1000012",
          name: "1000",
          group: true},
          OpeningBalance: {
              Amount:0,
              Type:'DR'
          },
         
          Debit: 0.0,
          Credit: 0.0,
          ClosingBalance: {
              Amount:0,
              Type:'DR'
          },
  },{
    id1:9,
    id:9,
      maingroup:"Assets",
      image:"https://tse1.mm.bing.net/th?id=OIP.w6Cs6qz234c71XloeqKdwgHaHa&pid=Api&P=0&h=180",
      particulars:{
          id:"GL1000012",
          name: "0",
          group: true},
          OpeningBalance: {
              Amount:0,
              Type:'DR'
          },
         
          Debit: 0.0,
          Credit: 0.0,
          ClosingBalance: {
              Amount:0,
              Type:'DR'
          },
  },
  {
    id1:10,
    id:10,
      maingroup:"Asset",
      image:"https://tse1.mm.bing.net/th?id=OIP.w6Cs6qz234c71XloeqKdwgHaHa&pid=Api&P=0&h=180",
      particulars:{
          id:"GL1000012",
          name: "0",
          group: true},
          OpeningBalance: {
              Amount:0,
              Type:'DR'
          },
         
          Debit: 0.0,
          Credit: 0.0,
          ClosingBalance: {
              Amount:0,
              Type:'DR'
          },
  }, 
  ]
  
  useEffect(()=>{
    const data={}
   datalist.map((item)=>{
    return data[item.maingroup]=item.particulars.name
   })
   console.log(data,"gfhj")
   setemployeamount({...data})
  },[])

  const pinnedRows = {
    top: [],
    bottom: [ ],
  };

 
console.log(typeof(Finacialyear),"dfghjkl65789s34567890-")
  return (
    <>
    
    <Box className="bg-white" sx={{borderRadius:"12px"}} >
        
        <Datagridtable
        rows={datalist}
        columns={columns}
        toolbar={false}
        disableColumnFilter={false}
        disableColumnMenu={false}
        disableColumnSelector={true}
        onRowClick={handleOnCellClick}
        pinnedRows={pinnedRows}
        pinnedColumns={{left:['maingroup',"particulars","OpeningBalance"]}}
        />
    </Box>
      
    </>
  )
}

export default Tabledata

