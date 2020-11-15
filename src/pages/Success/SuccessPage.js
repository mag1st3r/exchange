import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ClearConfirmData,
} from "../../redux/actions/exchange";
//components
import { ReactComponent as SvgSuccess} from "../../assets/svg/success.svg";
import Button from "../../components/Button/Button";

import "./successPage.scss";

export default function SuccessPage() {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(ClearConfirmData());
  }, [])
  
  return (
    <section className="success-wrapper">
        <SvgSuccess/>
        <h4 className="title">
            Success!
        </h4>
        <p>Your exchange order has been placed successfully and will be processed soon.</p>

        <Button className="btn" type="link" children="Home" src="/" style="accent"/>
    </section>
  );
};

