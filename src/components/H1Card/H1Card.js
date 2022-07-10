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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function H1Card({ data }) {
  const theme = useTheme();
  function cardClick(url) {
    window.open(url, "_blank");
  }

  return (
    <div>
      <Box
        sx={{ width: "100%" }}
        style={{
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {data.cards.map((value, index) => {
            var bgColor = value.bg_color;

            if (index == 1) {
              bgColor = "#FBAF03";
            }
            return (
              <Grid item xs={5} onClick={() => cardClick(value.url)} key={index}>
                <Item style={{ padding: 0 }}>
                  <Card
                    sx={{ display: "flex" }}
                    style={{
                      backgroundColor: bgColor,
                    }}
                  >
                    <CardContent>
                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src={value.icon.image_url}
                          sx={{ width: 28, height: 28 }}
                        />
                      </Box>
                    </CardContent>

                    <CardContent style={{ padding: 0, paddingTop: "10px" }}>
                      <Typography>{value.title}</Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {value.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
