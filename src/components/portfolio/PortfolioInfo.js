import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function PortfolioInfo(props) {
   const {info} = props;

   return (
      <a target={"_blank"} rel="noopener noreferrer" style={{textDecoration: 'none', textAlign:'center', whiteSpace:'pre-wrap'}}>
         {info}
      </a>
   );
}

export default PortfolioInfo;