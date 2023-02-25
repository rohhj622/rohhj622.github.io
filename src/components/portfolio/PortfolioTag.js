import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {Box} from "@mui/material";
import classNames from "classnames";

function PortfolioTag(props) {
   const tags = props.tag.split(' ');

   return (
      <Box p={1} fontSize={'0.2rem'}>
      {
         tags.map((word, index) => (
            <a className={classNames('portfolioTag')} key={index} target={"_blank"} rel="noopener noreferrer"style={{textDecoration: 'none', backgroundColor:'#ececec', color:'#1f1f1f', borderRadius:'25px', margin:'0.2rem', padding:'0.4rem'}}>
               {word}
            </a>
         ))
      }
      </Box>
   );
}

export default PortfolioTag;