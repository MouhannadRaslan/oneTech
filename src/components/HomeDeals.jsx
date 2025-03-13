import React from "react";
import deals from "../assets/deals.png.webp";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function HomeDeals() {
  const { language, setLanguage, t } = useContext(LanguageContext);
  return (
    <>
      <div className="card border-0 shadow p-3 mb-5">
        <div className="card-body">
          <h5>{t.deals}</h5>
          <img src={deals} alt="" className="card-img-top mt-3" />
          <div className="row justify-content-between mt-3">
            <div className="col-md-6">
              <p className="text-secondary fw-semibold">{t.headPhones}</p>
            </div>
            <div className="col-md-3">
              <p className="text-secondary fw-semibold">$300</p>
            </div>
            <div className="col-md-6">
              <h4 className="fw-semibold">Beoplay H7</h4>
            </div>
            <div className="col-md-3">
              <h4 className="text-danger fw-semibold">$225</h4>
            </div>
            <div className="col-md-6">
              <p
                className="text-secondary fw-semibold mt-4"
                style={{ fontSize: "12px" }}
              >
                {t.available} : 6
              </p>
            </div>
            <div className="col-md-4">
              <p
                className="text-secondary fw-semibold mt-4"
                style={{ fontSize: "12px" }}
              >
                {t.alreadySold} : 28
              </p>
            </div>
            <div className="col-md-12">
              <div class="progress">
                <div
                  class="progress-bar w-25"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
