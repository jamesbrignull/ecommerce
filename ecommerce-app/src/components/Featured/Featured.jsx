import React from "react";
import * as S from "./Featured.style";
import ProductCard from "../ProductCard/ProductCard";

function Featured() {
  return (
    <S.FeatContainer>
      <S.TextContainer>
        <h2>Featured Boxes</h2>
        <p>To see all of our boxes, head over to our shop:</p>
        <button>Shop Now</button>
      </S.TextContainer>
      <S.ProductContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </S.ProductContainer>
    </S.FeatContainer>
  );
}

export default Featured;
