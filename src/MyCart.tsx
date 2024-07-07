import heart from "./assets/mycartheart.png";
import bin from "./assets/Vector.png";
import productCategoriesIcon from "./assets/productcategoriesicon.png";
import productsSortIcon from "./assets/productSortIcon.png";
import { Link } from "react-router-dom";

const MyCart = () => {
  return (
    <section className="myCartSection">
      <div className="cartDisplay">
        <div className="cartDisplayHeading">
          <p>Showing 3 of 3 items</p>
          <div className=" flex flex-row items-center gap-5">
            <img
              src={productCategoriesIcon}
              alt="categories"
              className=" h-4"
            />
            <img src={productsSortIcon} alt="sort" className=" h-4" />
          </div>
        </div>

        <div className="cartItemsDisplayGrp">
          <div className="cartItemBox">
            <img src="src/assets/13.png" alt="itemImg" className="cartImg" />

            <div>
              <div className="itemDetailsBox">
                <div className="itemRow justify-between">
                  <p className="itemName">Adiddas sporty unisex</p>
                  <p className="itemPrice">N68,500</p>
                </div>

                <div className="itemRow gap-10">
                  <p>Size : 42 </p>
                  <p>Color : White</p>
                </div>

                <div className="itemRow gap-10">
                  <p>Qty -1</p>
                  <p className=" font-bold bg-white px-2">+ -</p>
                </div>

                <div className="itemRow">
                  <p>Expected arrival date: 2 weeks from date of purchase.</p>
                </div>
              </div>

              <div className="itemRow justify-between">
                <button className=" flex flex-row items-center gap-2 bg-figmaOrange text-white py-2 px-4">
                  <img src={heart} alt="heart" className=" h-3" />
                  <p>Add to wishlist</p>
                </button>
                <button className=" flex flex-row items-center gap-2 text-figmaOrange bg-white py-2 px-4 border border-figmaOrange">
                  <img src={bin} alt="heart" className=" h-3" />
                  <p>Delete</p>
                </button>
              </div>
            </div>
          </div>

          <div className="cartItemBox">
            <img src="src/assets/3.png" alt="itemImg" className="cartImg" />

            <div>
              <div className="itemDetailsBox">
                <div className="itemRow justify-between">
                  <p className="itemName">Adiddas sporty unisex</p>
                  <p className="itemPrice">N38,500</p>
                </div>

                <div className="itemRow gap-10">
                  <p>Size : 42 </p>
                  <p>Color : Nude</p>
                </div>

                <div className="itemRow gap-10">
                  <p>Qty -1</p>
                  <p className=" font-bold bg-white px-2">+ -</p>
                </div>

                <div className="itemRow">
                  <p>Expected arrival date: 2 weeks from date of purchase.</p>
                </div>
              </div>

              <div className="itemRow justify-between">
                <button className=" flex flex-row items-center gap-2 bg-figmaOrange text-white py-2 px-4">
                  <img src={heart} alt="heart" className=" h-3" />
                  <p>Add to wishlist</p>
                </button>
                <button className=" flex flex-row items-center gap-2 text-figmaOrange bg-white py-2 px-4 border border-figmaOrange">
                  <img src={bin} alt="heart" className=" h-3" />
                  <p>Delete</p>
                </button>
              </div>
            </div>
          </div>

          <div className="cartItemBox">
            <img src="src/assets/7.png" alt="itemImg" className="cartImg" />

            <div>
              <div className="itemDetailsBox">
                <div className="itemRow justify-between">
                  <p className="itemName">Adiddas sporty unisex</p>
                  <p className="itemPrice">N58,500</p>
                </div>

                <div className="itemRow gap-10">
                  <p>Size : 42 </p>
                  <p>Color : Black</p>
                </div>

                <div className="itemRow gap-10">
                  <p>Qty -1</p>
                  <p className=" font-bold bg-white px-2">+ -</p>
                </div>

                <div className="itemRow">
                  <p>Expected arrival date: 2 weeks from date of purchase.</p>
                </div>
              </div>

              <div className="itemRow justify-between">
                <button className=" flex flex-row items-center gap-2 bg-figmaOrange text-white py-2 px-4">
                  <img src={heart} alt="heart" className=" h-3" />
                  <p>Add to wishlist</p>
                </button>
                <button className=" flex flex-row items-center gap-2 text-figmaOrange bg-white py-2 px-4 border border-figmaOrange">
                  <img src={bin} alt="heart" className=" h-3" />
                  <p>Delete</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="deliveryDisplay">
        <p className="px-2 py-2 border-b border-black">
          2 weeks from date of purchase.
        </p>

        <h3 className="px-2 py-2 border-b border-black">Apply coupon here</h3>

        <p className=" px-2 py-2 ">25% off all items bought with coupon</p>

        <div className=" flex flex-col gap-2 px-8">
          <div className="itemRow justify-between">
            <p className=" font-bold text-xl">Subtotal</p>
            <p className=" font-bold text-xl">N165,000</p>
          </div>

          <div className="itemRow justify-between">
            <p>Discount</p>
            <p>N0.00</p>
          </div>

          <div className="itemRow justify-between">
            <p>Delivery</p>
            <p>N165,000</p>
          </div>

          <div className="itemRow justify-between">
            <p>Tax</p>
            <p>N165,000</p>
          </div>

          <div className="itemRow justify-between">
            <p className=" font-bold">Total</p>
            <p className=" font-bold">N173,000</p>
          </div>
        </div>

        <div className=" mt-10">
          <button className=" w-10/12  mx-auto block text-white bg-figmaOrange px-4 py-2 mb-4">
            Proceed to checkout
          </button>

          <Link to={"/"}>
            <button className=" w-10/12  mx-auto block text-figmaOrange bg-white px-4 py-2 mb-5 border border-figmaOrange">
              Continue shopping
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
