import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Group from "../../assets/Clock.png";
import Group1 from "../../assets/History.png";
import Group2 from "../../assets/Rewards.png";

export default function H9Card({ data }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: false,
    nextArrow: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div
      style={{
        margin: "20px",
        borderRadius: "10px",
        paddingLeft: "20px",
      }}
    >
      <Slider {...settings}>
        {data.cards.map((value, index) => {
          return (
            <div
             key={index}
            >
              <a href={value.url} target="_blank">
                <img src={value.bg_image.image_url} height="100px" />
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
