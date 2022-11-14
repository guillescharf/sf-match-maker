import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../../assets/stylesheets/principal_structure/Footer.css';


const Footer = () => {
    return (
        <div className="footer-cont">
            <div>
                <a href='https://www.linkedin.com/in/guillermoscharf/' target="_blank" rel="noreferrer">Guillermo Scharf
                    <FontAwesomeIcon className='icons' icon={faLinkedin} />
                </a>

                <a href='https://www.linkedin.com/in/javieremanuelhuebra/' target="_blank" rel="noreferrer">Javier Huebra
                    <FontAwesomeIcon className='icons' icon={faLinkedin} />
                </a>

                <a href='https://www.linkedin.com/in/rolando-ramon-duarte-93116b17a/' target="_blank" rel="noreferrer">Rolando Duarte
                    <FontAwesomeIcon className='icons' icon={faLinkedin} />
                </a>

                <a href='https://www.linkedin.com/in/emmanuel-enrique-mombelli-366764148/' target="_blank" rel="noreferrer">Emanuel Mombelli
                    <FontAwesomeIcon className='icons' icon={faLinkedin} />
                </a>
            </div>

        </div>
    )
}

export default Footer;