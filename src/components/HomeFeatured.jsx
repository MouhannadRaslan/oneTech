import React from "react";
import { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import product1 from "../assets/featured_1.png.webp";
import product2 from "../assets/featured_2.png.webp";
import product3 from "../assets/featured_3.png.webp";
import product4 from "../assets/featured_4.png.webp";
import product5 from "../assets/featured_5.png.webp";
import product6 from "../assets/featured_6.png.webp";
import product7 from "../assets/featured_7.png.webp";
import product8 from "../assets/featured_8.png.webp";

export default function HomeFeatured() {
  const [isOpen, setIsOpen] = useState(false); //offcanvas menu

  // add to cart
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const { language, setLanguage, t } = useContext(LanguageContext);
  return (
    <>
      <div className="row p-3 justify-content-start g-0">
        <div className="col-md-3 col-3">
          <h4>{t.featured}</h4>
        </div>
        <div className="col-md-3 col-3">
          <h4>{t.onSale}</h4>
        </div>
        <div className="col-md-3 col-4">
          <h4>{t.bestRated}</h4>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-3 col-6">
          <div
            className="card product rounded-1 shadow border-0 mb-3"
            style={{ height: "270px" }}
          >
            <img
              src={product1}
              alt=""
              className="card-img-top w-75 ms-4 mt-2"
              style={{ height: "110px" }}
            />
            <div className="card-body">
              <div className="productContent">
              <p className="text-center fw-bold text-danger">
                $225 <small className="text-secondary fw-semibold">$300</small>{" "}
              </p>
              <p style={{ fontSize: "13px" }} className="text-center">
                Huawei MediaPad...
              </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    onClick={() =>
                      addToCart({ name: "Huawei MediaPad...", price: 225 })
                    }
                    className="btn btn-primary mt-2 w-100 productBtn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div
            className="card product rounded-1 shadow border-0 mb-3"
            style={{ height: "270px" }}
          >
            <img
              src={product3}
              alt=""
              className="card-img-top w-75 ms-4 mt-2"
              style={{ height: "110px" }}
            />
            <div className="card-body">
              <div className="productContent">
                <p className="text-center fw-bold">$379</p>
                <p style={{ fontSize: "13px" }} className="text-center">
                  Sony MDRZX310W
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    onClick={() =>
                      addToCart({ name: "Sony MDRZX310W", price: 379 })
                    }
                    className="btn btn-primary mt-2 w-100 productBtn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div
            className="card product rounded-1 shadow border-0 mb-3"
            style={{ height: "270px" }}
          >
            <img
              src={product5}
              alt=""
              className="card-img-top w-75 ms-4 mt-2"
              style={{ height: "110px" }}
            />
            <div className="card-body">
              <div className="productContent">
                <p className="text-center fw-bold">$225</p>
                <p style={{ fontSize: "13px" }} className="text-center">
                  Canon STM Kit...
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    onClick={() =>
                      addToCart({ name: "Canon STM Kit...", price: 225 })
                    }
                    className="btn btn-primary mt-2 w-100 productBtn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div
            className="card product rounded-1 shadow border-0 mb-3"
            style={{ height: "270px" }}
          >
            <img
              src={product7}
              alt=""
              className="card-img-top w-75 ms-4 mt-2"
              style={{ height: "110px" }}
            />
            <div className="card-body">
              <div className="productContent">
                <p className="text-center fw-bold">$379</p>
                <p style={{ fontSize: "13px" }} className="text-center">
                  Lenovo IdeaPad
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    onClick={() =>
                      addToCart({ name: "Lenovo IdeaPad", price: 379 })
                    }
                    className="btn btn-primary mt-2 w-100 productBtn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div
            className="card product rounded-1 shadow border-0 mb-3"
            style={{ height: "270px" }}
          >
            <img
              src={product2}
              alt=""
              className="card-img-top w-75 ms-4 mt-2"
              style={{ height: "110px" }}
            />
            <div className="card-body">
              <div className="productContent">
                <p className="text-center fw-bold">$225</p>
                <p style={{ fontSize: "13px" }} className="text-center">
                  Apple iPod shuffle
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    onClick={() =>
                      addToCart({ name: "Apple iPod shuffle", price: 225 })
                    }
                    className="btn btn-primary mt-2 w-100 productBtn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div
            className="card product rounded-1 shadow border-0 mb-3"
            style={{ height: "270px" }}
          >
            <img
              src={product4}
              alt=""
              className="card-img-top w-75 ms-4 mt-2"
              style={{ height: "110px" }}
            />
            <div className="card-body">
              <div className="productContent">
                <p className="text-center fw-bold">$225</p>
                <p style={{ fontSize: "13px" }} className="text-center">
                  LUNA Smartphone
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    onClick={() =>
                      addToCart({ name: "LUNA Smartphone", price: 225 })
                    }
                    className="btn btn-primary mt-2 w-100 productBtn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div
            className="card product rounded-1 shadow border-0 mb-3"
            style={{ height: "270px" }}
          >
            <img
              src={product6}
              alt=""
              className="card-img-top w-75 ms-4 mt-2"
              style={{ height: "110px" }}
            />
            <div className="card-body">
              <div className="productContent">
                <p className="text-center fw-bold">$225</p>
                <p style={{ fontSize: "13px" }} className="text-center">
                  Samsung J330F...
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    onClick={() =>
                      addToCart({ name: "Samsung J330F...", price: 225 })
                    }
                    className="btn btn-primary mt-2 w-100 productBtn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div
            className="card product rounded-1 shadow border-0 mb-3"
            style={{ height: "270px" }}
          >
            <img
              src={product8}
              alt=""
              className="card-img-top w-75 ms-4 mt-2"
              style={{ height: "110px" }}
            />
            <div className="card-body">
              <div className="productContent">
                <p className="text-center fw-bold">$225</p>
                <p style={{ fontSize: "13px" }} className="text-center">
                  Digitus EDNET...
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    onClick={() =>
                      addToCart({ name: "Digitus EDNET...", price: 225 })
                    }
                    className="btn btn-primary mt-2 w-100 productBtn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* offcanvas menu */}
        <span onClick={() => setIsOpen(true)} className="cartBtn">
          <i class="fa-solid fa-cart-shopping fa-lg"></i>
        </span>
        <div
          className={`overlay ${isOpen ? "show" : ""}`}
          onClick={() => setIsOpen(false)}
        ></div>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <i class="fa-solid fa-xmark"></i>
          </button>
          {/* add to cart */}
          <div
            style={{
              width: "100%",
            }}
          >
            <span
              style={{
                fontFamily: "sans-serif",
                textAlign: "center",
                marginLeft: "100px",
                fontSize: "1.5rem",
              }}
            >
              Your Cart
            </span>
            <hr />
            <ul className="cartList">
              {cart.map((item, index) => (
                <li key={index} className="cartLi">
                  {item.name} - ${item.price}
                  <button
                    className="productCartBtn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <hr style={{ marginBottom: "20px", marginTop: "20px" }} />
            <span className="totalPrice">Total Price : {totalPrice} $</span>
          </div>
        </div>
      </div>
    </>
  );
}
