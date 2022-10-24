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
          <h5>Sales</h5>
          <h2>
            The shopify for
            <span
            > beauty<br />
              brands </span>
          </h2>
          <p>
            Improve your brands shopping experience and <br />easily expand your
            audience and market your <br />
            products.
          </p>
        </div>
      </div>
      {/* <!-- END OF SALES SECTION --> */}
    </>

  )
}