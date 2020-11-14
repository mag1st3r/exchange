import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Select from "../../components/Select/Select";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";

import "./homePage.scss";
const optionsIndustry = [
  { id: 1, value: "fashion", label: "fashion" },
  { id: 2, value: "onlineShopping", label: "online shopping" },
  { id: 3, value: "shopping", label: "shopping" },
];

const HomePage = function () {
  const [sellField, setSellField] = useState("");
  const [buyField, setButField] = useState("");
  const [exchangeSellType, setExchangeSellType] = useState(optionsIndustry[0]);
  const dispatch = useDispatch();

  const handleChangeOption = (option) => {
    let selected;
    optionsIndustry.map((item) => {
      if (item.id === +option) {
        selected = { ...item };
      }
      return item;
    });
    setExchangeSellType(selected);
  };
  return (
    <main className="home-page">
      <form className="exchange-container-form">
        <div className="container">
          <div className="sell wrapper">
            <h4 className="title">Sell</h4>
            <Select
              optionsList={optionsIndustry}
              onChange={handleChangeOption}
              value={exchangeSellType}
            />
            <label className="field-container">
              <input
                type="number"
                value={sellField}
                onChange={(e) => {
                  setSellField(e.target.value);
                }}
              />
              <Loader />
            </label>
          </div>
          <div className="buy wrapper">
            <h4 className="title">Buy</h4>
            <Select
              optionsList={optionsIndustry}
              onChange={handleChangeOption}
              value={exchangeSellType}
            />
            <label className="field-container">
              <input
                type="number"
                value={buyField}
                onChange={(e) => {
                  setButField(e.target.value);
                }}
              />
              <Loader />
            </label>
          </div>
        </div>
        <Button className="btn submit" style="accent" loading={true} children={"Exchange"}/>
      </form>
    </main>
  );
};

export default HomePage;
