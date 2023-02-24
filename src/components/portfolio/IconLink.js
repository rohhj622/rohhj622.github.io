import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function IconLink(props) {
   const {link, title, icon} = props;
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer" style={{textDecoration: 'none'}}>
         {
            icon === 'fa-brands fa-safari' ? <FontAwesomeIcon icon={faSafari}/> : <FontAwesomeIcon icon={faCode}/>
         }
         {title}
      </a>
   );
}

export default IconLink;