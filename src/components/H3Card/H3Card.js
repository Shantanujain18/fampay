import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Asset15 from "../../assets/Asset15.png";

import { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useLongPress } from 'use-long-press';
import swal from 'sweetalert';
export default function H3Card({data}) {
  const [bgColor, setbgColor] = useState("")
  const [bgImage, setbgImage] = useState("")
  const [ctatext, setctatext] = useState("")
  const [ctaUrl, setctaUrl] = useState("")
  const [name, setname] = useState("")
  const [description, setdescription] = useState("")
  const [statedata, setdata] = useState([])
  const [isVisible, setIsVisible] = useState();
  const bind = useLongPress((title) => {
    console.log('Long pressed!');
    swal("Do you want this card?", {
      buttons: {
        cancel: "Cancel",
        dismiss: {
          text: "Dismiss Now",
          value: "dismiss",
        },
        remind: {
          text: "Remind  Later",
          value: "remind",
        },
      },
      closeOnClickOutside: false,
    })
    .then((value) => {
      switch (value) {
     
        case "remind":
          // swal("Remind me Later on refresh");
          swal("We will remind you later", "success");
          setIsVisible(false);
          break;
     
        case "dismiss":
          setIsVisible(false);
          localStorage.setItem("title", "invisible")
          swal("Dismissed Succesfully", "success");
         
          break;
     
        default:
          // swal("Got away safely!");
      }
    });
  });

  useEffect(() => {
    
    setdata(data.cards)
  
  // setbgColor(data.cards[0].)
  data.cards.map((value)=>{
    setname(value.title);
  setdescription(value.description);
  setbgColor(value.bg_color)
  setbgImage(value.bg_image.image_url)
  setctatext(value.cta[0].text)
    setctaUrl(value.cta[0].url)
    if(localStorage.getItem("title") != "invisible" || localStorage.getItem("title")== null){
      // alert("Hello")
      setIsVisible(true);
    }else{
      setIsVisible(false);
    }

  })
  
    
  }, [])
  // let navigate = useNavigate(); 
const CTAClick=()=>{
  // window.location.href=ctaUrl
  window.open(ctaUrl, '_blank');
  localStorage.setItem("title","invisible")
  // statedata.ma
}
  return (
    <div>
      {
        isVisible?  <Card
        sx={{ minWidth: 275 }}
        style={{
        
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
            margin: "20px",
            borderRadius: "10px",
            paddingLeft: "20px",
            paddingTop:"110px"
          }}
          {...bind(name)}
      >
        <CardContent>
        
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 550,
              lineHeight: "2rem",
              paddingBottom: "20px",
              paddingTop: "40px",
            }}
            color="#FFFFFF"
          >
            {/* <span style={{ color: "#FBAF03" }}>Big Display Card</span> with Action */}
            {name}
          </Typography>
  
          <Typography variant="body2" color="#FFFFFF">
            {description}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#000000",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop:"10px",
              paddingBotton:"10px",
              fontSize: "15px",
              marginBottom: "10px",
            }}
            onClick={CTAClick}
          >
            {ctatext}
          </Button>
        </CardActions>
      </Card>:null
      }
   
    </div>
  );
}
