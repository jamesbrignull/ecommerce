import React from "react";
import * as S from "./Navbar.style";
// Firebase
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
// Redux
import { connect } from "react-redux";

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
        <Link to="/">About</Link>
        <Link to="/shop">Shop</Link>
        {currentUser ? (
          <Link to="/" onClick={() => auth.signOut()}>
            Sign Out
          </Link>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </S.OptionsContainer>
    </S.NavContainer>
  );
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navbar);
