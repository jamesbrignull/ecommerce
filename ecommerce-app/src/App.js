import React from "react";
// Misc
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
// Styles
import GlobalStyle from "./Globalstyle";
// Pages
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import SignInUp from "./pages/SignInUp/SignInUp";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
