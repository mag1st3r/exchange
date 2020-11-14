import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants/routes";
//components
import Select from "../../components/Select/Select";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";

import "./detailsPage.scss";

const DetailsPage = function () {
  return (
    <section className="details-wrapper">
      <h4 className="title">Details</h4>
      <div className="container">
        <p className="sell">
          <span className="operation">Sell</span>
          <span className="count">123.90 Webmoney WMR</span>
        </p>
        <p className="buy">
          <span className="operation">Buy</span>
          <span className="count">123.90 Webmoney WMR</span>
        </p>
      </div>
      <div className="btn-container">
        <Button
          className="btn"
          type="link"
          src={BASE_URL}
          style="white"
          children={"Cancel"}
        />
        <Button className="btn" style="accent" children={"Confirm"} />
      </div>
    </section>
  );
};

export default DetailsPage;
