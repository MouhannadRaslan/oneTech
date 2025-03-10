import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useContext(LanguageContext);
  return (
    <>
      {/* top bar */}
      <div className="container-fluid bg-light border">
        <div className="row p-2 justify-content-md-between justify-content-center">
          <div className="col-md-6  d-md-block d-none">
            <div className="row justify-content-center g-0">
              <div className="col-md-5">
                <div className="mt-2">
                  <i class="fa-solid fa-mobile-screen-button me-2"></i> +38 068
                  005 3570
                </div>
              </div>
              <div className="col-md-5">
                <div className="mt-2">
                  <i class="fa-solid fa-envelope me-2"></i> fastsales@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row justify-content-md-end justify-content-between">
              <div className="col-md-2 col-4">
                <div>
                  <select
                    className="form-select border-0 bg-light"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                    <option value="tr">Türkçe</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2 d-md-block d-none">
                <div>
                  <select className="form-select border-0 bg-light">
                    <option value="en">US</option>
                    <option value="ar">EUR</option>
                    <option value="tr">TL</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="mt-2">
                  <i class="fa-regular fa-user"></i>{" "}
                  <span className="sign"> {t.register}</span>{" "}
                  <span className="text-secondary ps-2 pe-2">|</span>{" "}
                  <span className="sign"> {t.sign}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* nav header */}
      <div className="container">
        <div className="row justify-content-md-center justify-content-around p-5 pb-4 ps-1 pe-0">
          <div className="col-md-2 col-4">
            <Link to="/" className="text-primary fw-bolder navbar-brand">
              <h1>OneTech</h1>
            </Link>
          </div>
          <div className="col-md-5 d-md-block d-none">
            <form className="border p-2">
              <div className="row g-0 justify-content-between">
                <div className="col-md-5">
                  <input
                    type="search"
                    className="form-control border-0"
                    placeholder={t.search}
                  />
                </div>
                <div className="col-md-1 mt-1">
                  <span className="text-secondary ms-1">|</span>
                </div>
                <div className="col-md-3 mt-1">
                  <a
                    href=""
                    className="text-decoration-none text-secondary dropdown-toggle"
                  >
                    {t.category}
                  </a>
                </div>
                <div className="col-md-1">
                  <div className="mt-1">
                    <a className="text-decoration-none" href="">
                      <i class="fa-solid fa-magnifying-glass fa-xl text-secondary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4 col-4">
            <div className="row justify-content-center">
              <div className="col-md-5 col-6">
                <div className="row justify-content-md-center justify-content-around">
                  <div className="col-md-4 col-4">
                    <div className="d-md-block d-none h5 mt-2">
                      <i class="fa-regular fa-heart fa-2xl"></i>
                    </div>
                    <div className="d-md-none d-block">
                      <i class="fa-regular fa-heart fa-2xl"></i>
                    </div>
                  </div>
                  <div className="col-md-6 col-6">
                    <div className="">
                      <h5 className="d-md-block d-none fw-normal">
                        {t.wishlist}
                      </h5>
                      <p className="text-secondary ps-2">115</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-6">
                <div className="row justify-content-md-center justify-content-around">
                  <div className="col-md-4 col-4">
                    <div className="d-md-block d-none h5 mt-2">
                      <i class="fa-solid fa-cart-shopping fa-2xl"></i>
                    </div>
                    <div className="d-md-none d-block">
                      <i class="fa-solid fa-cart-shopping fa-2xl"></i>
                    </div>
                  </div>
                  <div className="col-md-6 col-6">
                    <div className="">
                      <h5 className="d-md-block d-none fw-normal">{t.cart}</h5>
                      <p className="text-secondary ps-2">$85</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg shadow pt-0 pb-0">
        <div className="container">
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="dropdown">
            <button
              class="btn btn-secondary rounded-0 bg-primary border-0 text-uppercase p-3 pe-5 ps-5"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-solid fa-bars me-2"></i>
              {t.categories}
            </button>
            <ul class="dropdown-menu rounded-0 mt-0">
              <li>
                <a class="dropdown-item" href="#">
                  Computers & Laptops
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#">
                  Cameras & Photos
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#">
                  Hardware
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#">
                  Smartphones & Tablets
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#">
                  TV & Audio
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#">
                  Gadgets
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#">
                  Car Electronics
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#">
                  Video Games & Consoles
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item p-2">
                <Link className="nav-link" to="/">
                  {t.home}
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/">
                  {t.superDeals}
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/">
                  {t.featuredBrands}
                </Link>
              </li>
              <li className="nav-item dropdown p-2">
                <Link
                  className="nav-link"
                  data-bs-toggle="dropdown"
                  to="/"
                >
                  {t.pages} <i class="fa-solid fa-chevron-down fa-xs"></i>
                </Link>
                <ul class="dropdown-menu rounded-0 p-3">
                  <li>
                    <Link to="/shop" class="dropdown-item">
                      {t.navShop}
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/product" class="dropdown-item">
                      {t.navProduct}
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/blog" class="dropdown-item">
                      {t.blog}
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/blogPost" class="dropdown-item">
                      {t.navBlogPost}
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/regularPost" class="dropdown-item">
                      {t.navRegularPost}
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/cart" class="dropdown-item">
                      {t.cart}
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link to="/contact" class="dropdown-item">
                      {t.contact}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/blog">
                  {t.blog}
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/contact">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
