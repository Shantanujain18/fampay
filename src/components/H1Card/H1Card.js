import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Group from "../../assets/Group.png"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function H1Card() {
  const theme = useTheme();

  return (
    <div >
 <Card sx={{ display: 'flex' }}  style={{
        backgroundColor: "#FBAF03",
        margin: "20px",
        borderRadius: "10px",
        paddingLeft: "20px",
      }}>
        <CardContent sx={{ flex: '  0 auto' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Avatar alt="Remy Sharp" src={Group} />
       
       
      </Box>
         
        </CardContent>
     
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography >
            Simple Card Content
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" >
            Mac Miller
          </Typography>
        </CardContent>
      
    </Card>
    <Box sx={{ width: '100%' }} style={{
       
        margin: "20px",
        borderRadius: "10px",
      }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={5} >
        <Item style={{padding:0}}>
          <Card sx={{ display: 'flex' }}  style={{
        backgroundColor: "#FBAF03",
       
      }}>
        <CardContent >
        <Box >
        <Avatar alt="Remy Sharp" src={Group}  sx={{ width: 28, height: 28 }} />
       
       
      </Box>
         
        </CardContent>
     
        <CardContent  style={{padding:0, paddingTop:"10px",}}>
          <Typography >
            Transaction
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" >
            View All txn
          </Typography>
        </CardContent>
      
    </Card>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item style={{padding:0}}>
          <Card sx={{ display: 'flex' }}  style={{
        backgroundColor: "#FBAF03",
       
      }}>
        <CardContent >
        <Box >
        <Avatar alt="Remy Sharp" src={Group}  sx={{ width: 28, height: 28 }} />
       
       
      </Box>
         
        </CardContent>
     
        <CardContent  style={{padding:0, paddingTop:"10px"}}>
          <Typography >
            Transaction
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" >
            View All txn
          </Typography>
        </CardContent>
      
    </Card>
          </Item>
        </Grid>
      
      </Grid>
    </Box>
    
    </div>
   
  );
}
