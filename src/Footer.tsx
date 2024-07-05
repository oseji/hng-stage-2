const Footer = () => {
  return (
    <footer>
      <div className="logoGrp">
        <p className=" text-figmaOrange">Carty</p>
        <p>Cart</p>
      </div>

      <div className="footerColsGrp">
        <div className="footerCols">
          <h3 className="colHeading">company</h3>

          <div className="colTextGrp">
            <p className="footerText">Address; 21, aminu kano, abuja</p>
            <p className="footerText">Phone: +234810000000</p>
            <p className="footerText">Email: cartycart@gmail.com</p>
          </div>
        </div>

        <div className="footerCols">
          <h3 className="colHeading">customer service</h3>

          <div className="colTextGrp">
            <p className="footerText">Help center & FAQs</p>
            <p className="footerText">Transaction service Terms & condition</p>
            <p className="footerText">Return policy Track order</p>
          </div>
        </div>

        <div className="footerCols">
          <h3 className="colHeading">my account</h3>

          <div className="colTextGrp">
            <p className="footerText">Delivery information</p>
            <p className="footerText">Privacy policy </p>
            <p className="footerText">Custom link</p>
          </div>
        </div>

        <div className="footerCols">
          <h3 className="colHeading">accepted cards</h3>

          <div className="colTextGrp">
            <p className="footerText">Visa</p>
            <p className="footerText">Mastercard</p>
            <p className="footerText">Americanexpress </p>
            <p className="footerText">PayPal </p>
            <p className="footerText">Google pay </p>
            <p className="footerText">Apple pay </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
