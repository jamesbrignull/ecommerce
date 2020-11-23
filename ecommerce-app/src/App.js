import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./Globalstyle";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
