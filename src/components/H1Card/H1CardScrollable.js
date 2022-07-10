import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Group from "../../assets/Group.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

import Avatar from "@mui/material/Avatar";
import Slider from "react-slick";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function H1CardScrollable({ data }) {
  const theme = useTheme();
  function cardClick(url) {
    window.open(url, "_blank");
  }
  const settings = {
    dots: false,
    centerMode:true,
    infinite: true,
    speed: 500,
    prevArrows: false,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    // paddingLeft:20
  };

  return (
    <div
      style={{
        margin: "20px",
        borderRadius: "10px",
        paddingLeft: "5px",
      }}
    >
      <Slider {...settings}>
        {data.cards.map((value, index) => {
          var bgColor = value.bg_color;

          if (index == 1) {
            bgColor = "#FBAF03";
          }
          return (
            <div  key={index}>
              <Card
                sx={{ display: "flex" }}
                style={{
                  backgroundColor: bgColor,
                  margin:'10px',
                  borderRadius: "10px",
                }}
                onClick={() => cardClick(value.url)}
              >
                <CardContent sx={{ flex: "0  0 auto" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Avatar alt="avatar" src={value.icon.image_url} />
                  </Box>
                </CardContent>

                <CardContent sx={{ flex: "0 0 auto" }}>
                  <Typography>{value.title}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {value.name}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
