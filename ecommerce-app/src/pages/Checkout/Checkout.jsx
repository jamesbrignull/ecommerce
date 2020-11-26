import React from "react";
import * as S from "./Checkout.style";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/Cart/cartSelectors";

function Checkout({ cartItems, total }) {
  return (
    <S.CheckoutPageContainer>
      <S.CheckoutHeaderContainer>
        <S.HeaderBlockContainer>
          <span>Item</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Description</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Quantity</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Price</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Remove</span>
        </S.HeaderBlockContainer>
      </S.CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <S.TotalContainer>TOTAL: £{total}</S.TotalContainer>
      <S.WarningContainer></S.WarningContainer>
    </S.CheckoutPageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
