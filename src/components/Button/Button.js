import react from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./button.scss";

export default function Button({
  children,
  id,
  onClick,
  disabled,
  loading,
  className,
  type,
  style,
  src,
}) {
  return type === "link" ? (
    <Link   onClick={onClick} className={`${className} ${style}`} to={src}>{children}</Link>
  ) : (
    <button
      id={id}
      onClick={onClick}
      type="submit"
      disabled={disabled}
      className={`${className} ${style}`}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}
