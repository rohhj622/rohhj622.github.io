import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
            {/* <i className={icon} aria-hidden="true"/> */}
            { icon === 'fa-facebook' ? 
                <FontAwesomeIcon icon={faFacebook}/> : null
            }
            { icon === 'fa-instagram' ?
                <FontAwesomeIcon icon={faInstagram}/> : null
            }
            { icon === 'fa-github' ?
                <FontAwesomeIcon icon={faGithub}/> : null
            }
            { icon === 'fa-linkedin' ?
                <FontAwesomeIcon icon={faLinkedin}/> : null
            }
            { icon === 'fa-twitter' ?
                <FontAwesomeIcon icon={faTwitter}/> : null
            }
        </a>
    );
}

export default SocialIcon;