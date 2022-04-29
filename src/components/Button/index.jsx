import p from 'prop-types';
import "./style.css";
import { Component } from "react";

export const Button = ({ text, onClick, disabled = false}) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.defautProps = {
  disabled: false,
}

Button.prototype = {
  text: p.string.isRequired,
  onClick: p.func.isRequired,
  disabled: p.bool
}
