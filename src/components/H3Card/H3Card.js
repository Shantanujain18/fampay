import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Asset15 from "../../assets/Asset15.png";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function H3Card() {
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        backgroundColor: "#454AA6",
        margin: "20px",
        borderRadius: "10px",
        paddingLeft: "20px",
      }}
    >
      <CardContent>
        <img
          src={Asset15}
          sx={{
            mr: 15,
            display: { xs: "none", md: "flex" },
          }}
          width="91px"
          height="81px"
          style={{ marginTop: "20px" }}
        />
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 550,
            lineHeight: "2rem",
            paddingBottom: "20px",
            paddingTop: "10px",
          }}
          color="#FFFFFF"
        >
          <span style={{ color: "#FBAF03" }}>Big Display Card</span> with Action
        </Typography>

        <Typography variant="body2" color="#FFFFFF">
          Add some money to your account to get started.
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
        >
          Action
        </Button>
      </CardActions>
    </Card>
  );
}
