import salesSectionImage from "../images/sales.png"


export default function Sales() {



  return (
    <>


      {/* <!-- SALES SECTION --> */}
      <div className="container sales__container">
        <div className="sales__section-left">
          <img src={salesSectionImage} alt="sales section" />
        </div>
        <div className="sales__section-right">
          <h5>Insights</h5>
          <h2>
            Beauty insights
            <br /> <span
            >
              for smarter purchases
            </span>
          </h2>
          <p>
            Use our insider information and Al product<br /> insights to up your beauty game.


          </p>
        </div>
      </div>
      {/* <!-- END OF SALES SECTION --> */}
    </>

  )
}