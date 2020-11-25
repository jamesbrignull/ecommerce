import React from "react";
// Styles
import GlobalStyle from "./Globalstyle";
// Misc
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
// Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/User/userActions";
// Pages
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import SignInUp from "./pages/SignInUp/SignInUp";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
