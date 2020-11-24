import React from "react";
// Routing
import { Switch, Route } from "react-router-dom";
// Styles
import GlobalStyle from "./Globalstyle";
// Pages
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import SignInUp from "./pages/SignInUp/SignInUp";
import Footer from "./components/Footer/Footer";
// Firebase
import { auth } from "./firebase/utils";

const initialState = {
  currentUser: null,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    // authListener = null

    // componentDidMount(){
    //   this.authListener = auth.onAuthStateChanged(userAuth => {
    //     if(!userAuth) return;

    //     this.setState({
    //       currentUser: userAuth
    //     })
    //   })
    // }

    // componentWillUnmount(){
    //   this.authListener();
    // }
  }
  render() {
    return (
      <>
        <GlobalStyle />
        <Navbar />
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
