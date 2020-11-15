import React, { useState, useEffect,useRef } from "react";
import clsx from "clsx";
import { ReactComponent as SvgArrow } from "../../assets/svg/arrow.svg";
import "./select.scss";

const RenderOptions = ({ id, name }) => {
    
  return (
    <li key={id} id={id} className={clsx("dropdown-list__option")}>
      {name}
    </li>
  );
};

export default function Select({
  className,
  name,
  id,
  onChange,
  optionsList,
  value,
}) {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (e.target.id) {
      onChange(e.target.id, name);
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

  const options = optionsList && optionsList.map(({ id, name }) => (
    <RenderOptions  key={id} id={id} name={name} />
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
          {value && value.name }
        </span>
        <SvgArrow />
      </div>
      <ul className={clsx("dropdown-list")}>
        {options}
      </ul>
    </div>
  );
}
