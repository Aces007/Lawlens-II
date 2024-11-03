import '../../App.scss';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contact from '../../assets/contact.png';


const Contact = () => {
    return (
        <>
            <h1 id='contact_quote'>NEED HELP? <span>DON'T HESITATE TO REACH OUT</span></h1>
            <div className="contact_cont">
                <div className="contact_content">
                    <div className="left">
                        <img src={contact} alt="me" />
                    </div>
                    <div className="right">
                        <div className="creator">
                            <h1>Ace Lawrence Clavano</h1>
                            <h2 id="creator_label">System Developer</h2>
                        </div>
                        <p id='creator_quote'>Empowering Creativity and Redefining Standards</p>
                        <div className="socials">
                            <a href="mailto:acelawrence007@gmail.com" className='letsTalk'>Let's Talk</a>
                            <div className="social_icons">
                                <a href='https://www.linkedin.com/in/ace-lawrence-clavano-230450274/'><FontAwesomeIcon icon={faLinkedin} size='2x' className='socials_id' /></a>
                                <a href='https://www.facebook.com/eyzslaw'><FontAwesomeIcon icon={faFacebook} size='2x' className='socials_id' /></a>
                                <a href='https://github.com/Aces007'><FontAwesomeIcon icon={faGithub} size='2x' className='socials_id'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Contact;