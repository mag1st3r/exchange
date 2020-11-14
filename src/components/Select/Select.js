import React, { useState, useEffect,useRef } from "react";
import clsx from "clsx";
import { ReactComponent as SvgArrow } from "../../assets/svg/arrow.svg";
import "./select.scss";

const RenderOptions = ({ id, label, disabledList }) => {
    
  const duplicated = disabledList && disabledList.filter( (option) => option.id === id);
  const isDisabled = duplicated && duplicated.length === 1;
  return (
    <li key={id} id={id} className={clsx("dropdown-list__option", isDisabled && "disabled")}>
      {label}
    </li>
  );
};

export default function Select({
  className,
  title,
  id,
  onChange,
  optionsList,
  value,
}) {
  const ref = useRef();

  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (e.target.id) {
      onChange(e.target.id);
      setOpen(!open);
    } else {
      setOpen(!open);
    }
  };

  const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleClick);
  
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  useOutsideClick(ref, () => {
    setOpen(false);
  });

  const options = optionsList.map(({ id, label }) => (
    <RenderOptions  key={id} id={id} label={label} />
  ));

  return (
    <div
      id={id}
      className={clsx(`component-select`, open && "active", className && className)}
      onClick={(e) => handleClick(e)}
      ref={ref}
    >
      <div className="current-container">
        <span className="current-value">
          {value && value.label }
        </span>
        <SvgArrow />
      </div>
      <ul className={clsx("dropdown-list")}>
        {options}
      </ul>
    </div>
  );
}
