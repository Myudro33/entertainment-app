import React from "react";
import { RightSideWrapper } from "../Styled";
import { InputTypes, RightSideProps } from "../Types";
import Input from "./Input";
import store from "../data.json";
import Home from "./Home";
import Page from "./Page";
import Bookmarks from "./Bookmarks";

const RightSide = ({ value, setvalue, data, page }: RightSideProps) => {
  return (
    <RightSideWrapper>
      <Input value={value} setvalue={setvalue} />
      {page === "home" && (
        <Home
          data={data}
          store={store.filter((movie) => movie.isTrending !== true)}
        />
      )}
      {page !== "home" && page !== "bookmarks" && <Page data={data} page={page} />}
      {page==='bookmarks'&&(
        <Bookmarks data={data} />
      )}
    </RightSideWrapper>
  );
};

export default RightSide;
