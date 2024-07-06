import { products } from "./types";

import emptyHeart from "./assets/emptyHeartIcon.png";
// import redHeart from "./assets/redHeartIcon.png";
import emptyCart from "./assets/productCartIcon.png";
// import fullCart from "./assets/blackProductCartIcon.png";

const Products = () => {
  return (
    <section className="productsPage">
      <div className="filterSection">
        {/* header */}
        <div className=" flex flex-row gap-5 items-center">
          <div className=" p-2 border border-black rounded-md">unisex</div>
          <div className=" p-2 border border-black rounded-md">all</div>
        </div>

        <div className="filterGrp">
          <div className="filterHeadingGrp">
            <h3 className="filterHeading">brands</h3>
          </div>
        </div>
      </div>

      <div className="productsGrp">
        <div className="productsGrpHeading">
          <p>showing 1 to 16 of 50 products</p>

          <div className="sortGrp">
            <select>
              <option value="default">default sorting</option>
              <option value="default">by price</option>
              <option value="default">by brand</option>
            </select>
          </div>
        </div>

        <div className="productsCollection">
          {products.map((element, index) => (
            <div className="productBox" key={index}>
              <div className="topProductGrp">
                <div className="productIconGrp">
                  <img
                    src={emptyHeart}
                    alt="heart icon"
                    className="productIcon"
                  />
                  <img
                    src={emptyCart}
                    alt="heart icon"
                    className="productIcon"
                  />
                </div>

                <img src="" alt="product image" className="productImg" />
              </div>

              <div className="bottomProductGrp">
                <p className="productName">{element.name}</p>
                <p className="productPrice">{element.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
