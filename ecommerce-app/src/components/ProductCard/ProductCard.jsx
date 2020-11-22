import React from "react";
import * as S from "./ProductCard.style";

function ProductCard() {
  return (
    <S.Card>
      <img
        src="https://i.ibb.co/sbM3b0W/Screenshot-2020-11-22-at-12-23-33.png"
        alt="product"
      />
      <h3>Product Name</h3>
      <h4>Product Price</h4>
    </S.Card>
  );
}

export default ProductCard;
