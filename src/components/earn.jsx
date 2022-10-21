import earnImage from "../images/earn.png"
export default function Earn() {

    return (

        <section className="section earn__section" id="earn">
            {/* <!-- EARN SECTION --> */}
            <div className="container earn__container">
                <div className="earn__section-left">
                    <h5>Earn</h5>
                    <h2>
                        Create beauty and content <br />
                        and profit from brand <br />
                        <span>deals and sales</span>
                    </h2>
                    <p>
                        Become part of the Calnita community and earn <br />
                        by producing content, referring friends to buy <br />
                        products and taking advantage of brand offers and <br />
                        discounts.
                    </p>
                </div>
                <div className="earn__section-right">
                    <img src={earnImage} alt="earn image" />
                </div>
            </div>
            {/* <!-- END OF EARN SECTION --> */}
        </section>
    )
}