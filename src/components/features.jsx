import qualityProductsImage from "../images/quality products.png"
import tailoredImage from "../images/tailored experience.png"
import dropShipImage from "../images/DRopship and earn.png"
export default function Features() {

  return (
    <>


      {/* <!-- FEATURES SECTION --> */}
      <div className="container features__container">
        <h5>Features</h5>
        <h2>
          All you need for the <br />
          best
          <span
          > beauty shopping <br />
            experience</span>
        </h2>

        <div className="features__row">
          <div className="features__col">
            <h4>Quality Products</h4>
            <p>All products are of quality and will serve you at very best</p>
            <img src={qualityProductsImage} alt="Quality products" />
          </div>

          <div className="features__col features__col-2">
            <h4>Tailored Experience</h4>
            <p>
              Get the best beauty experience, with every beauty product tailored
              to meet your specific needs and preferences.
            </p>
            <img
              src={tailoredImage}
              alt="tailored experience"
            />
          </div>

          <div className="features__col">
            <h4>Dropship and Earn</h4>
            <p>
              Earn from drop-shipping selected beauty products from various
              brands.
            </p>
            <img src={dropShipImage} alt="Dropship and earn" />
          </div>
        </div>
      </div>
      {/* <!-- END OF FEATURES SECTION --> */}
    </>

  )
}