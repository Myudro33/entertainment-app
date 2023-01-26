import React, { useEffect } from "react";
import { useState } from "react";
import RightSide from "./Components/RightSide";
import Sidebar from "./Components/Sidebar";
import { Container } from "./Styled";
import data from "./data.json";

const App = () => {
  const [page, setpage] = useState<string>("home");
  const [value, setvalue] = useState<string>("");
  const [store, setstore] = useState<{}[]>([]);

  useEffect(() => {
    if (page === "bookmarks") {
      setstore(data.filter((movie) => movie.isBookmarked));
    } else if (page === "home") {
      setstore(data.filter((movie) => movie.isTrending));
    } else if (data.filter((movie) => movie.category === page)) {
      setstore(data.filter((movie) => movie.category === page));
    }
  }, [page]);
  return (
    <Container>
      <Sidebar page={page} setpage={setpage} />
      <RightSide page={page} value={value} setvalue={setvalue} data={store} setstore={setstore} />
    </Container>
  );
};

export default App;
