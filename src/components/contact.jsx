import axios from "axios"
import { useState } from "react"
import { sendMail } from "../apiCall"
import { useEffect } from "react"
// const url = "https://courageous-yak-veil.cyclic.app"

export default function Contact({ notify }) {
    const [email, setEmail] = useState("")


    function submit(e) {
        e.preventDefault()
        console.log("this is email", email)
        sendMail(email)
        notify()
    }

    return (


        <>

            {/* <!-- CONTACT SECTION --> */}
            <div className="container contact__container">
                <h2>
                    Willing to try a brand new <br />beauty experience? join our <br />
                    <span> Waitlist to see when we <br />launch </span>
                </h2>

                <form className="hero__form contact__form">
                    <input type="text" placeholder="Enter your Email" value={email} onChange={(e) => {
                        // e.preventDefault()
                        setEmail(e.target.value)
                    }} />
                    <button className="btn hero__btn" onClick={submit}>Join Waitlist</button>
                </form>
            </div>
            {/* <!-- END OF CONTACT SECTION --> */}
        </>

    )
}