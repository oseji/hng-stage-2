import buyersProtection from "./assets/buyersProtection.png";
import safePayment from "./assets/safePayment.png";
import valueForMoney from "./assets/valueForMoney.png";
import freeShipping from "./assets/freeShipping.png";

const Features = () => {
  return (
    <section className="featuresSection">
      <div className="featureBox">
        <img
          src={buyersProtection}
          alt="buyers Protection icon"
          className="featureIcon"
        />

        <h2 className="featureHeading">buyers protection</h2>

        <p className="featureText">
          Get a refund if item arrive late, damaged or not as described
        </p>
      </div>

      <div className="featureBox">
        <img
          src={safePayment}
          alt="safe payment icon"
          className="featureIcon"
        />

        <h2 className="featureHeading">safe payment</h2>

        <p className="featureText">
          Safe payment methods preferred by international shoppers or buyers
        </p>
      </div>

      <div className="featureBox">
        <img
          src={valueForMoney}
          alt="value for money icon"
          className="featureIcon"
        />

        <h2 className="featureHeading">value for money </h2>

        <p className="featureText">
          We offer the best price for great quality of all our items.
        </p>
      </div>

      <div className="featureBox">
        <img
          src={freeShipping}
          alt="free shipping icon"
          className="featureIcon"
        />

        <h2 className="featureHeading">free shipping</h2>

        <p className="featureText">
          Get free shipping world wide on some specific items and items more
          than N100,000.
        </p>
      </div>
    </section>
  );
};

export default Features;
