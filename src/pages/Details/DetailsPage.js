import React, { useEffect } from "react";
import {useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants/routes";
import {
  ClearDataExchange,
  ConfirmExchangeRequest
} from "../../redux/actions/exchange";
//components
import Button from "../../components/Button/Button";

import "./detailsPage.scss";

const DetailsPage = function () {
  const dispatch = useDispatch();
  const history = useHistory();

  const { payMethods, loading, calculateResult, detailsExchange, confirmed } = useSelector(
    (state) => state.exchange
  );
  useEffect(() => {
    if(!detailsExchange) {
      history.push('/');
    }
  }, []);

  useEffect(() => {
    if(confirmed) {
      history.push("/success");
    }
  }, [confirmed]);

  const handleCancel = () => {
    dispatch(ClearDataExchange());
  }

  const handleConfirm = () => {
    dispatch(ConfirmExchangeRequest(detailsExchange));
  }

  const {base, amount, invoicePayMethod, withdrawPayMethod} = detailsExchange && detailsExchange || {}

  const findCountNamePayMethod = (type) => {
    if(type === "invoice") {
      const method = payMethods.invoice.filter((method) => method.id === invoicePayMethod)[0];
      const count = base === "invoice" ? amount : calculateResult;
      return `${count} ${method.name}`
    } else {
      const method = payMethods.withdraw.filter((method) => method.id === withdrawPayMethod)[0];
      const count = base === "withdraw" ? amount : calculateResult;
      return `${count} ${method.name}`
    }
  };
  return (
    <section className="details-wrapper">
      <h4 className="title">Details</h4>
      <div className="container">
        <p className="sell">
          <span className="operation">Sell</span>
          <span className="count">
            {detailsExchange && findCountNamePayMethod("invoice")}
          </span>
        </p>
        <p className="buy">
          <span className="operation">Buy</span>
          <span className="count">{detailsExchange && findCountNamePayMethod("withdraw")}</span>
        </p>
      </div>
      <div className="btn-container">
        <Button
          className="btn"
          type="link"
          src={BASE_URL}
          style="white"
          children={"Cancel"}
          onClick={handleCancel}
        />
        <Button className="btn" onClick={handleConfirm} loading={loading} style="accent" children={"Confirm"} />
      </div>
    </section>
  );
};

export default DetailsPage;
