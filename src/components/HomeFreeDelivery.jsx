import React from 'react';
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";


export default function HomeFreeDelivery() {
    const { language, setLanguage, t } = useContext(LanguageContext);
  return (
    <>
        <div className="container">
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-md-2 col-6">
                    <div>
                        <div className="card rounded-1 shadow-sm mt-4">
                            <div className="card-body">
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-4">
                                        <i class="fa-solid fa-truck fa-2xl text-primary"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <h6>
                                                    {t.freeDelivery}
                                                </h6>
                                                <p>
                                                    {t.deliveryPrice}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-6">
                    <div>
                        <div className="card rounded-1 shadow-sm mt-4">
                            <div className="card-body">
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-4">
                                    <i class="fa-solid fa-arrows-rotate fa-2xl text-primary"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <h6>
                                                    {t.freeDelivery}
                                                </h6>
                                                <p>
                                                    {t.deliveryPrice}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-6">
                    <div>
                        <div className="card rounded-1 shadow-sm mt-4">
                            <div className="card-body">
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-4">
                                    <i class="fa-solid fa-wallet fa-2xl text-primary"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <h6>
                                                    {t.freeDelivery}
                                                </h6>
                                                <p>
                                                    {t.deliveryPrice}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-6">
                    <div>
                        <div className="card rounded-1 shadow-sm mt-4">
                            <div className="card-body">
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-4">
                                    <i class="fa-solid fa-tags fa-2xl text-primary"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <h6>
                                                    {t.freeDelivery}
                                                </h6>
                                                <p>
                                                    {t.deliveryPrice}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
