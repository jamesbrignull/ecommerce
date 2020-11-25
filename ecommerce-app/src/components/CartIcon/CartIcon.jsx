import React from "react";
import * as S from "./CartIcon.style";

function CartIcon() {
  return (
    <S.CartContainer>
      <S.ShoppingIcon />
      <S.ItemCountContainer>0</S.ItemCountContainer>
    </S.CartContainer>
  );
}

export default CartIcon;
