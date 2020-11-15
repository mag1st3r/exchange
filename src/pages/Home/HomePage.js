import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import {
  GetPayMethodsRequest,
  CalculatePayMethodsRequest,
  SaveDetailsExchange,
} from "../../redux/actions/exchange";

//components
import Select from "../../components/Select/Select";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";

import "./homePage.scss";

let timer;

const HomePage = function () {
  const history = useHistory();
  const { payMethods, loading, calculateResult, detailsExchange } = useSelector(
    (state) => state.exchange
  );
  const [sellField, setSellField] = useState("");
  const [buyField, setButField] = useState("");
  const [invoice, setInvoice] = useState();
  const [withdraw, setWithdraw] = useState();
  const [activeField, setActiveField] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPayMethodsRequest());
  }, []);

  useEffect(() => {
    if (payMethods) {
      setInvoice(payMethods.invoice[0]);
      setWithdraw(payMethods.withdraw[1]);
    }
  }, [payMethods]);

  useEffect(() => {
    if (calculateResult) {
      activeField === "invoice"
        ? setButField(calculateResult)
        : setSellField(calculateResult);
    }
  }, [calculateResult]);

  const handleChangeOption = (optionId, name) => {
    let selected;
    let payMethod =
      name === "invoice" ? payMethods.invoice : payMethods.withdraw;
    payMethod.map((method) => {
      if (method.id === +optionId) {
        selected = { ...method };
      }
      return method;
    });
    name === "invoice" ? setInvoice(selected) : setWithdraw(selected);
  };

  const calculateRequest = (value, name) => {
    dispatch(
      CalculatePayMethodsRequest({
        base: name,
        amount: value,
        invoicePayMethod: invoice.id,
        withdrawPayMethod: withdraw.id,
      })
    );
  };

  const handleChangeCalculate = (name, value) => {
    clearTimeout(timer);
    if (name === "invoice") {
      setSellField(value);
      setActiveField(name);
    } else {
      setButField(value);
      setActiveField(name);
    }
    timer = setTimeout(() => {
      calculateRequest(value, name);
    }, 1000);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const value = activeField === "invoice" ? sellField : buyField;
    dispatch(
      SaveDetailsExchange({
        base: activeField,
        amount: value,
        invoicePayMethod: invoice.id,
        withdrawPayMethod: withdraw.id,
      })
    );
    history.push("/details");
  };

  return (
    <main className="home-page">
      <form className="exchange-container-form">
        <div className="container">
          <div className="sell wrapper">
            <h4 className="title">Sell</h4>
            <Select
              name="invoice"
              optionsList={payMethods && payMethods.invoice}
              onChange={handleChangeOption}
              value={invoice}
            />
            <label className={clsx("field-container", loading && "disabled")}>
              <input
                name="invoice"
                type="number"
                required
                disabled={loading}
                value={sellField}
                onChange={(e) => {
                  handleChangeCalculate(e.target.name, e.target.value);
                }}
              />
              {loading && <Loader />}
            </label>
          </div>
          <div className="buy wrapper">
            <h4 className="title">Buy</h4>
            <Select
              name="withdraw"
              optionsList={payMethods && payMethods.withdraw}
              onChange={handleChangeOption}
              value={withdraw}
            />
            <label className={clsx("field-container", loading && "disabled")}>
              <input
                name="withdraw"
                type="number"
                value={buyField}
                disabled={loading}
                required
                onChange={(e) => {
                  handleChangeCalculate(e.target.name, e.target.value);
                }}
              />
              {loading && <Loader />}
            </label>
          </div>
        </div>
        <Button
          className="btn submit"
          style="accent"
          children={"Exchange"}
          onClick={handleSubmitForm}
        />
      </form>
    </main>
  );
};

export default HomePage;
