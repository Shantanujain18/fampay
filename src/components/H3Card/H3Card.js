import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState, useEffect } from "react";

import { useLongPress } from "use-long-press";
import swal from "sweetalert";

import Slider from "react-slick";
export default function H3Card({ data }) {
  const [bgColor, setbgColor] = useState("");
  const [bgImage, setbgImage] = useState("");
  const [ctatext, setctatext] = useState("");
  const [ctaUrl, setctaUrl] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [statedata, setdata] = useState([]);
  const [isVisible, setIsVisible] = useState();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    prevArrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const bind = useLongPress((title) => {
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
    }).then((value) => {
      switch (value) {
        case "remind":
          // swal("Remind me Later on refresh");
          swal("We will remind you later", "success");
          setIsVisible(false);
          break;

        case "dismiss":
          setIsVisible(false);
          localStorage.setItem("title", "invisible");
          swal("Dismissed Succesfully", "success");

          break;

        default:
        // swal("Got away safely!");
      }
    });
  });

  useEffect(() => {
    setdata(data.cards);

    // setbgColor(data.cards[0].)
    data.cards.map((value) => {
      setname(value.title);
      setdescription(value.description);
      setbgColor(value.bg_color);
      setbgImage(value.bg_image.image_url);
      setctatext(value.cta[0].text);
      setctaUrl(value.cta[0].url);
      if (
        localStorage.getItem("title") != "invisible" ||
        localStorage.getItem("title") == null
      ) {
        // alert("Hello")
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  // let navigate = useNavigate();
  const CTAClick = () => {
    // window.location.href=ctaUrl
    window.open(ctaUrl, "_blank");
    localStorage.setItem("title", "invisible");
    // statedata.ma
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
    <div >
      
      <Slider {...settings}>
      {isVisible ? (
        
        data.cards.map((value,key)=>{
         return <div key={key}><Card
          sx={{ minWidth: 275 }}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            margin: "20px",
            borderRadius: "10px",
            paddingLeft: "20px",
            paddingTop: "110px",
          }}
          {...bind(name)}
          onClick={() => cardClick(value.url)}
        >
          <CardContent>
           
            <h1
            sx={{
              fontSize: 30,
              fontWeight: 550,
              lineHeight: "2rem",
              paddingBottom: "20px",
              paddingTop: "40px",
            }}
            className="heading"
            dangerouslySetInnerHTML={createMarkUp(
              value.formatted_title
                ? generateStyles(value.formatted_title)
                : value.title
            )}
          />

            <Typography variant="body2" color="#FFFFFF">
              {description}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              style={{
                backgroundColor: value.cta[0].bg_color,
                paddingLeft: "30px",
                paddingRight: "30px",
                paddingTop: "10px",
                paddingBotton: "10px",
                fontSize: "15px",
                marginBottom: "10px",
                color:value.cta[0].text_color
              }}
              onClick={CTAClick}
            >
              {ctatext}
            </Button>
          </CardActions>
        </Card>
        </div>
        })
       
      ) : null}
      </Slider>
    </div>
  );
}
