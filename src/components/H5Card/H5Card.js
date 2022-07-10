import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Group from "../../assets/Gorilla.jpeg";
import { useEffect } from "react";
import Slider from "react-slick";
export default function H5Card({ data }) {
  const theme = useTheme();
  // const [bgImage, setbgImage] = useState("")
  useEffect(() => {}, []);

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
            <Card
              sx={{ display: "flex" }}
              style={{
                margin: "20px",
                borderRadius: "12px",
              }}
              key={index}
              onClick={() => cardClick(value.url)}
            >
              <CardContent sx={{ flex: "1 0 auto" }} style={{ padding: 0 }}>
                <img
                  component="div"
                  style={{
                    borderRadius: "12px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={value.bg_image.image_url}
                />
              </CardContent>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
}
