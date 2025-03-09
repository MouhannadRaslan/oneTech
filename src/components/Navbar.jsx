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
      

      
    </>
  );
}
