// import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import logo from "./soc_logo_360.png"
import "./Footer.css";

function Footer() {
  return (
  //   <Box
  //     id="footer"
  //     aria-label="footer-box"
  //     bgcolor={"#525252"}
  //     sx={{
  //       mt: "1em",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       flexDirection: "row",
  //       height: "3em",
  //       bottom: "0",
  //     }}
  //   >
  //     <Box
  //       id="footer-logo"
  //       aria-label="school-of-code-footer-logo"
  //       sx={{
  //         mt: '0.5em',
  //         display: 'flex',
  //         alignItems: 'center',
  //         bottom: "-2em",
  //       }}>
  //     <figure>
  //       <img src={logo} alt="soc logo" sx={{ width: '3em', height: 'auto', objectFit: 'contain' }} />
  //       </figure>
  //     </Box> 
  //     <Typography sx={{ color: "#FCF7F1" }}>2023 - School of Code</Typography>
  //   </Box>
  // );

 <div id="footer" aria-label="footer-box">
  <div id="footer-logo" aria-label="school-of-code-footer-logo">
    <figure>
      <img src={logo} alt="soc logo" />
    </figure>
  </div>
  <a href="https://www.schoolofcode.co.uk/" target="_blank" rel="noreferrer" id="footer-link" aria-label="school-of-code-website-link">
    <Typography id="footer-text">2023 - School of Code</Typography>
  </a>
</div>
);
}

export default Footer;
