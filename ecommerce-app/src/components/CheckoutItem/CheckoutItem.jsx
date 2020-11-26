import React from "react";
import * as S from "./CheckoutItem.style";

function CheckoutItem({ cartItem: { name, imageUrl, price, quantity } }) {
  return (
    <S.CheckoutItemContainer>
      <S.ImageContainer>
        <img src={imageUrl} alt="item" />
      </S.ImageContainer>
      <S.TextContainer>{name}</S.TextContainer>
      {/* <S.QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </S.QuantityContainer> */}
      <S.TextContainer>{price}</S.TextContainer>
      {/* <S.RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </S.RemoveButtonContainer> */}
    </S.CheckoutItemContainer>
  );
}

export default CheckoutItem;
