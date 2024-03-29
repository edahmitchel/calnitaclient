import logo from "../images/logo.png"
import heroImage from "../images/hero screen image.png"
import { useState } from "react"
import { sendMail } from "../apiCall"
function Header({ notify }) {
  const [email, setEmail] = useState("")


  function submit(e) {
    e.preventDefault()
    console.log("this is email", email)
    sendMail(email)
    notify()
  }

  return (<>
    <header className="header header__container container">
      <img className="logo" src={logo} alt="logo" />
      <section className="hero__section section" id="hero-section">
        <div className="container hero__container">
          <div className="hero__left">
            <h2 className="slide__left">
              The Shopify for <br />
              <span>beauty brands</span>
            </h2>

            <p className="slide__left">
              Experience the best from your favourite beauty<br /> brands and learn about fantastic products to<br /> improve your everyday routine and make you<br /> feel confident and attractive.

              {/* Make your journey through beauty exciting and <br />
              get help finding the right beauty products<br />
              suited for you. */}
            </p>

            <form className="hero__form slide__left">
              <input type="text" placeholder="Enter your Email" value={email} onChange={(e) => {
                setEmail(e.target.value)
              }} />
              <button className="btn hero__btn" onClick={submit}>Join Waitlist</button>
            </form>

            <ul className="slide__left">
              <li><a href="https://www.instagram.com/calnitaapp/">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/calnitahq/" >LinkedIn</a></li>
              <li><a href="https://twitter.com/Calnitaapp?t=crEknLrgQguCCmc1078CWA&s=09">Twitter</a></li>
            </ul>
          </div>
          <div className="hero__right">
            <img src={heroImage} alt="hero" />
          </div>
        </div>
      </section>
      {/* <!-- END OF HEADER SECTION --> */}
    </header>
  </>

  )
}

export default Header

