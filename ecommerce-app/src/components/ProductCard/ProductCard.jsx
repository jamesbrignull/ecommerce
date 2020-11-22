import React from "react";
import * as S from "./ProductCard.style";

function ProductCard({ name, price, imageUrl }) {
  return (
    <S.Card>
      <h3>{name}</h3>
      <h4>£{price}</h4>
      <img src={imageUrl} alt="product" />
    </S.Card>
  );
}

export default ProductCard;
