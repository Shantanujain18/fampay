import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Group from "../../assets/Gorilla.jpeg"

export default function H6Card() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}  style={{
      
      backgroundImage: `url(${Group})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
        margin: "20px",
        borderRadius: "10px",
        paddingLeft: "20px",
      }}>
        {/* <CardContent sx={{ flex: '  0 auto' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
     <img src={Group} height="150px" width="100px"/>
       
       
      </Box>
         
        </CardContent> */}
   
      <CardContent sx={{ flex: '1 0 auto' }} style={{paddingTop:"100px", hidden:"true"}}>
          <Typography component="div" style={{fontWeight:"bold"}} >
            .
          </Typography>
         
        </CardContent>
     
    </Card>
  );
}
