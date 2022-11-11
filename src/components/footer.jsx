import linkedIn from "../icons/LinkedIn Circled.png"
import instagram from "../icons/Instagram.png"
import twitter from "../icons/Twitter.png"
import logo from "../images/logo.png"
export default function Footer() {

  return (



    <>
      {/* <!-- FOOTER SECTION --> */}
      <div className="footer__container container">
        <img className="logo footer__logo" src={logo} alt="logo" />

        <div className="social__links">
          <a href="https://www.linkedin.com/company/calnitahq/" ><img src={linkedIn} alt="LinkedIn" className="footer-img" /></a>

          <a href="https://www.instagram.com/calnitaapp/"><img src={instagram} alt="Instagram" className="footer-img" /></a>
          <a href="https://twitter.com/Calnitaapp?t=crEknLrgQguCCmc1078CWA&s=09"><img src={twitter} alt="Twitter" className="footer-img" /></a>
          {/* <img src={twitter} alt="Twitter" /> */}
        </div>

        <div className="contact__info">
          <h6>Contact</h6>
          <small>Support@Calnita.com</small>
        </div>
      </div>
      {/* <!-- END OF FOOTER SECTION --> */}
    </>


  )
}