import React from 'react';
import { Box } from "@mui/material";
import classNames from "classnames";

function PortfolioTag(props) {
   const tags = props.tag.split(' ');

   return (
      <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} fontSize={'0.6rem'}>
         {
            tags.map((word, index) => (
               <a className={classNames('portfolioTag')} key={index} target={"_blank"} rel="noopener noreferrer" style={{ textDecoration: 'none', backgroundColor: '#ececec', color: '#1f1f1f', borderRadius: '25px', margin: '0.2rem', padding: '0.4rem' }}>
                  {word}
               </a>
            ))
         }
      </Box>
   );
}

export default PortfolioTag;