import React from 'react'
import Datagridtable from './Datagridtable';
import { Box,Avatar,Stack, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
const Dataentitytable = () => {
    const columns = [
        {
            field: 'debit',
            // headerName: 'Vendor code/ledger code',
            headerName: "ENTITY",
            flex:2,
            renderCell: params =>(
                <Typography sx={{fontSize:"16px",fontWeight:"500",lineHeight:"21px"}}>{params.row.debit}</Typography>

            )
            
        },
        {
            field: 'credit',
            // headerName: 'Vendor code/ledger code',
            headerName: "POINT OF CONTACT",
            flex:2,
            renderCell: params =>(
                <Stack direction={"row"} gap={1}>
                <Avatar
                    sx={{ bgcolor: deepOrange[500] }}
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
            <Typography sx={{fontSize:"16px",fontWeight:"500",lineHeight:"21px",color:"#0067B2",display:"flex",alignItems:"center"}}>{params.row.credit}</Typography>
            </Stack>
                )
        },
        ,
        {
            field: 'Debit',
            // headerName: 'Vendor code/ledger code',
            headerName: "CASH",
            flex:2,
        },
        {
            field: 'Debit',
            // headerName: 'Vendor code/ledger code',
            headerName: "STOCK",
            flex:2,
        }
    ];
    const datalist=[{
        id1:1,
        debit:"entity1",
        credit:"personx",
        Debit:1000,
        Credit:3000
    },
    {
        id1:2,
        debit:"entity2",
        credit:"persony",
        Debit:1000,
        Credit:3000
    }] 
  return (
    <div>
      <Box className="bg-white" sx={{borderRadius:"12px"}} >
        
        <Datagridtable
        rows={datalist}
        columns={columns}
        toolbar={false}
        disableColumnFilter={false}
        disableColumnMenu={false}
        disableColumnSelector={true}
        datagh={"dfghjklfghj"}
        />
    </Box>
    </div>
  )
}

export default Dataentitytable
