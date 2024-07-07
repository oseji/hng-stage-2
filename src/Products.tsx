import { products } from "./types";

import productCategoriesIcon from "./assets/productcategoriesicon.png";
import productsSortIcon from "./assets/productSortIcon.png";
import stars from "./assets/stars.png";
import xIcon from "./assets/xIcon.png";
import upArrow from "./assets/upArrow.svg";
import downArrow from "./assets/downArrow.svg";
import emptyHeart from "./assets/emptyHeartIcon.png";
// import redHeart from "./assets/redHeartIcon.png";
import emptyCart from "./assets/productCartIcon.png";

// import fullCart from "./assets/blackProductCartIcon.png";

const Products = () => {
  return (
    <section className="productsPage">
      {/* filter section */}
      <div className="filterSection">
        {/* header */}
        <div className=" flex flex-row gap-5 items-center">
          <div className=" flex flex-row items-center gap-2 p-2 border border-black w-1/2 capitalize">
            <img src={xIcon} alt="close icon" className=" h-3" />
            <p>Unisex</p>
          </div>

          <div className=" flex flex-row items-center gap-2 p-2 border border-black w-1/2 capitalize">
            <img src={xIcon} alt="close icon" className=" h-3" />
            <p>All</p>
          </div>
        </div>

        <div className="filterGrp">
          <div className="filterHeadingGrp">
            <h3 className="filterHeading">brands</h3>
            <img src={downArrow} alt="down arrow" className="h-2" />
          </div>

          <div className="filterSelectionGrp">
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>all</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>adiddas</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>puma</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>nike</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>zara</label>
            </div>
          </div>
        </div>

        <div className="filterGrp">
          <div className="filterHeadingGrp">
            <h3 className="filterHeading">price</h3>
            <img src={downArrow} alt="down arrow" className="h-2" />
          </div>

          <div className="filterSelectionGrp">
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>below n30,000</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>below n40,000</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>below n60,000</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>below n80,000</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>below n100,000</label>
            </div>
          </div>
        </div>

        <div className="filterGrp">
          <div className="filterHeadingGrp">
            <h3 className="filterHeading">type</h3>
            <img src={downArrow} alt="down arrow" className="h-2" />
          </div>

          <div className="filterSelectionGrp">
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>boys</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>girls</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>female</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>male</label>
            </div>
            <div className="filtersSelection">
              <input type="checkbox" />
              <label>unisex</label>
            </div>
          </div>
        </div>

        <div className="filterHeadingGrp">
          <h3 className="filterHeading">color</h3>
          <img src={upArrow} alt="down arrow" className="h-2" />
        </div>

        <div className="filterHeadingGrp">
          <h3 className="filterHeading">discount</h3>
          <img src={upArrow} alt="down arrow" className="h-2" />
        </div>
      </div>

      {/* product section */}
      <div className="productsGrp">
        <div className="productsGrpHeading">
          <p>showing 1 to 16 of 50 products</p>

          <div className="sortGrp">
            <select className=" py-2 pr-2 border-r border-black capitalize">
              <option value="default">default sorting</option>
              <option value="default">by price</option>
              <option value="default">by brand</option>
            </select>

            <div className="productHeadIconGrp">
              <img
                src={productCategoriesIcon}
                alt="categories icon"
                className="proudctHeadIcon pr-2 border-r border-black"
              />
              <img
                src={productsSortIcon}
                alt="sort icon"
                className="proudctHeadIcon pl-2"
              />
            </div>
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

                <img
                  src={element.img}
                  alt={`${element.name} shoe`}
                  className="productImg"
                />
              </div>

              <div className="bottomProductGrp">
                <p className="productName">{element.name}</p>
                <p className="productPrice">
                  N{element.price.toLocaleString()}
                </p>
                <img src={stars} alt="ratings" className=" mx-auto" />
              </div>
            </div>
          ))}
        </div>

        <div className="paginationGrp">
          <div className="pageNum activePage">1</div>
          <div className="pageNum">2</div>
          <div className="pageNum">3</div>
          <div className="pageNum">4</div>

          <div className="font-bold cursor-pointer">{">"}</div>
        </div>
      </div>
    </section>
  );
};

export default Products;
