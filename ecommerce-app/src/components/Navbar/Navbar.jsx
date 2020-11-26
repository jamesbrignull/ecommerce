import React from "react";
import * as S from "./Navbar.style";
// Firebase
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
// Redux & State
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/User/userSelectors";

// Components
import CartIcon from "../CartIcon/CartIcon";

function Navbar({ currentUser }) {
  return (
    <S.NavContainer>
      <S.LogoContainer>
        <Link to="/">
          <h1>ButcherBox</h1>
        </Link>
      </S.LogoContainer>
      <S.OptionsContainer>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        {currentUser ? (
          <Link to="/" onClick={() => auth.signOut()}>
            Sign Out
          </Link>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
        <Link to="/checkout">
          <CartIcon />
        </Link>
      </S.OptionsContainer>
    </S.NavContainer>
  );
}
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Navbar);
