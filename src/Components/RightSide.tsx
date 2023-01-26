import React, { useState } from "react";
import { RightSideWrapper } from "../Styled";
import { InputTypes, RightSideProps, TrendingCardProps } from "../Types";
import Input from "./Input";
import store from "../data.json";
import Home from "./Home";
import Page from "./Page";
import Bookmarks from "./Bookmarks";
import { useEffect } from "react";

const RightSide = ({ value, setvalue, data, page,setstore }: RightSideProps) => {
  const [bookmarkedData, setbookmarkedData] = useState(store.filter((item)=>item.isBookmarked));


  return (
    <RightSideWrapper>
      <Input value={value} setvalue={setvalue} />
      {page === "home" && (
        <Home
          data={data}
          store={store.filter((movie) => movie.isTrending !== true)}
          setstore={setstore}
          value={value}
        />
      )}
      {page !== "home" && page !== "bookmarks" && (
        <Page setbookmarkedData={setbookmarkedData} data={data} page={page} />
      )}
      {page === "bookmarks" && (
        <Bookmarks bookmarkedData={bookmarkedData} setbookmarkedData={setbookmarkedData} />
      )}
    </RightSideWrapper>
  );
};

export default RightSide;
