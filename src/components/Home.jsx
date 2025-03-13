import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import HomeBanner from "./HomeBanner";
import HomeFreeDelivery from "./HomeFreeDelivery";
import HomeDeals from "./HomeDeals";
import HomeFeatured from "./HomeFeatured";

export default function Home() {
  const { language, setLanguage, t } = useContext(LanguageContext);
  return (
    <>
      <HomeBanner />
      <HomeFreeDelivery />
      <div className="container">
        <div className="row justify-content-between mb-5">
          <div className="col-md-4">
            <HomeDeals />
          </div>
          <div className="col-md-7">
            <HomeFeatured/>
          </div>
        </div>
      </div>
    </>
  );
}
