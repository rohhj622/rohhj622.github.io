import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {Box} from "@mui/material";


function PortfolioTag(props) {
   const tags = props.tag.split(' ');

   return (
      <Box p={1} fontSize={'0.2rem'}>
      {
         tags.map((word, index) => (
            <a key={index} target={"_blank"} rel="noopener noreferrer" style={{textDecoration: 'none', borderRadius:'25px', backgroundColor:'#ececec', margin:'0.2rem', padding:'0.3rem'}}>
               {word}
            </a>
         ))
      }
      </Box>
   );
}

export default PortfolioTag;