import linkedIn from "../icons/LinkedIn Circled.png"
import instagram from "../icons/Instagram.png"
import twitter from "../icons/Twitter.png"
import logo from "../images/logo.png"
export default function Footer () {

    return(

        

  <>
        {/* <!-- FOOTER SECTION --> */}
    <div className="footer__container container">
      <img className="logo footer__logo" src={logo} alt="logo" />

      <div className="social__links">
        <img src={linkedIn} alt="LinkedIn" />
        <img src={instagram} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
      </div>

      <div className="contact__info">
        <h6>Contact</h6>
        <small>Contact@Calnita.com</small>
      </div>
    </div>
    {/* <!-- END OF FOOTER SECTION --> */}
  </>      
  

    )
}