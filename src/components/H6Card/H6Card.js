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

import Slider from "react-slick";
export default function H6Card({ data }) {
  const theme = useTheme();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  function cardClick(url) {
    window.open(url, "_blank");
  }
  const generateStyles = (entity) => {
    // generates an array of text including "{}"
    let textArray=  entity.text.split(" ");

    let bracketIndex=  0;

    // iterating over all the highlighted entities
    entity.entities.forEach((entityItem, i) => {
      let style = "";

      // creates the style for the highlighted entity
      Object.keys(entityItem).forEach((attribute) => {
        if (attribute !== "text") {
          // @ts-ignore
          style += `${attribute}: ${entityItem[attribute]};`;
        }
      });

      // iterating over the text array and replaces the "{}" with the styled text
      textArray.forEach((textItem, currentIndex) => {
        if (textItem.includes("{}") && i === bracketIndex) {
          const finalHTML = textItem.replace(
            "{}",
            `<span style="${style}">${entityItem["text"]}</span>`
          );
          textArray[currentIndex] = finalHTML;
          bracketIndex += 1;
        }
      });
    });

    return textArray.join(" ");
  };
  
  const createMarkUp = (text) => {
    return { __html: text };
  };
  return (
    <div
      style={{
        margin: "20px",
        borderRadius: "12px",
      }}
    >
      <Slider {...settings}>
        {data.cards.map((value, index) => {
          return (
            <div  key={index}>
              {/* {console.log(value)} */}
              <Card
                sx={{ display: "flex" }}
                style={{
                  borderRadius: "10px",
                  // paddingLeft: "20px",
                }}
               
                onClick={() => cardClick(value.url)}
              >
                <CardContent sx={{ flex: "0  0 auto" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src={value.icon.image_url}
                      height="30px"
                      width="30px"
                    />
                  </Box>
                </CardContent>

                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" style={{ fontWeight: "bold" }}>
                  <div
            className="heading"
            dangerouslySetInnerHTML={createMarkUp(
              value.formatted_title
                ? generateStyles(value.formatted_title)
                : value.title
            )}
          />
                  </Typography>
                </CardContent>
                <IconButton aria-label="next">
                  <ArrowForwardIosIcon />
                  {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
                </IconButton>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
