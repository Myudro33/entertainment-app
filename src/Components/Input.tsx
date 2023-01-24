import React from "react";
import { InputWrapper } from "../Styled";
import searchIcon from "../assets/icon-search.svg";
import { InputTypes } from "../Types";

const Input = ({ value, setvalue }: InputTypes) => {
  return (
    <InputWrapper>
      <img src={searchIcon} alt="searchicon" />
      <input
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        style={{
          width: "90%",
          margin: "0px 15px",
          height: "40px",
          fontSize: "18px",
          color: "white",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
        }}
        placeholder="Search for movies,TV shows..."
        type="text"
      />
    </InputWrapper>
  );
};

export default Input;
