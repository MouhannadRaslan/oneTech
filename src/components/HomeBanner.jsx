import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import img from "../assets/banner_product.png.webp";

export default function HomeBanner() {
  const { language, setLanguage, t } = useContext(LanguageContext);
  return (
    <>
      <div className="container-fluid homeBanner">
        <div className="row justify-content-end">
          <div
            className="col-md-5 col-5 d-flex align-items-center"
            style={{ height: "80vh" }}
          >
            <div>
              <h1
                className="text-uppercase display-4 fw-normal mb-5"
                style={{ color: "#7599b2" }}
              >
                {t.homeBannerHeader}
              </h1>
              <span className="text-danger display-6 fw-semibold">
                <del className="text-secondary">$530</del> $460
              </span>
              <div className="row">
                <div className="col-md-3">
                  <button className="btn-primary btn mt-5 p-2 pe-4 ps-4 ">
                    {t.homeBannerBtn}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-5 d-flex align-items-center"
          style={{ height: "80vh" }}
          >
            <div>
                    <img src={img} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
