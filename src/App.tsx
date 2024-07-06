import { useEffect, useState } from "react";
import Features from "./Features";
import Footer from "./Footer";
import Products from "./Products";

import searchIcon from "./assets/searchIcon.png";
import cameraIcon from "./assets/cameraIcon.png";
import headerCart from "./assets/cartIcon.png";
import categoriesIcon from "./assets/categoriesIcon.png";

import insta from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import facebook from "./assets/facebook.png";
import emailIcon from "./assets/email.png";

function App() {
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    setCartCount(0);
  }, []);
  return (
    <div className="App">
      <header>
        <div className="topGrp">
          <div className="logoGrp">
            <p className=" text-figmaOrange">Carty</p>
            <p>Cart</p>
          </div>

          <div className=" w-full md:w-auto flex flex-col md:flex-row items-center gap-3 md:gap-10 ">
            <form className="inputBox" onSubmit={(e) => e.preventDefault()}>
              <button>
                <img src={searchIcon} alt="search icon" className="icon" />
              </button>

              <input
                type="text"
                className="headerInput"
                placeholder="Search for item"
              />

              <img
                src={cameraIcon}
                alt="camera icon"
                className="icon cursor-pointer"
              />
            </form>

            <div className="cartCountGrp">
              <div className=" flex flex-row items-center gap-1 pr-4 border-r border-white">
                <img src={headerCart} alt="" className="icon" />
                <p>Cart</p>
              </div>

              <p className=" pl-4">{cartCount} items</p>
            </div>
          </div>

          <div className="signUpGrp">
            <button className="signButton">sign in</button>
            <button className="signButton">sign up</button>
          </div>
        </div>

        <div className="bottomGrp">
          <div className="categoriesHeader">
            <p>Categories</p>
            <img src={categoriesIcon} alt="categories icon" className="icon" />
          </div>

          <ul className="categoriesList">
            <li className="categoriesText">home</li>
            <li className="categoriesText">fashion</li>
            <li className="categoriesText">electronics</li>
            <li className="categoriesText">health & beauty</li>
            <li className="categoriesText">sports</li>
            <li className="categoriesText">more</li>
          </ul>
        </div>
      </header>

      <Products></Products>

      <Features></Features>

      <div className="newsLetterGrp">
        <p>Sign up to our news letter</p>

        <form className="border border-white p-2 rounded-md w-full md:w-96">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className=" bg-transparent outline-0 w-full placeholder:text-white placeholder:opacity-85"
          />
        </form>

        <div className="socialIconGrp">
          <img src={facebook} alt="facebook icon" className="socialIcon" />
          <img src={twitter} alt="twitter icon" className="socialIcon" />
          <img src={insta} alt="instagram icon" className="socialIcon" />
          <img src={emailIcon} alt="email icon" className="socialIcon" />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
