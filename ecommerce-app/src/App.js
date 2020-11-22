import React from "react";
import GlobalStyle from "./Globalstyle";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
