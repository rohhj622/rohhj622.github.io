import React from 'react';
import IconLink from "./IconLink";
import PortfolioInfo from "./PortfolioInfo";
import PortfolioTag from "./PortfolioTag";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { image, live, source, title, info, tag } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} style={{ maxWidth: "100%" }} />
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'2.0rem'} py={'0.3rem'} 
            style={{fontWeight:700,textAlign:'center',maxWidth: "80%", whiteSpace:'pre-wrap' }}>
            {title}
         </Box>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.0rem'} py={'0.3rem'} style={{ maxWidth: "80%" }}>
            {
               info != '' &&
               <PortfolioInfo info={info} />
            }
            {
               tag != '' &&

               <PortfolioTag tag={tag} />
            }
         </Box>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.0rem'} py={'2rem'}>
            {
               live != '' &&
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={live} title={' Live Demo'} icon={'fa-brands fa-safari'} />
               </Box>

            }
            {
               source != '' &&
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={source} title={' Source Code'} icon={'fa-solid fa-code'} />
               </Box>
            }
         </Box>
      </Box>
   );
}

export default PortfolioBlock;