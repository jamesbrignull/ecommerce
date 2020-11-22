import React from "react";
import * as S from "./Featured.style";
import ProductCard from "../ProductCard/ProductCard";
import FEATURED_DATA from "../../redux/Products/featuredData";

function Featured() {
  return (
    <S.FeatContainer>
      <S.TextContainer>
        <h2>Featured Boxes</h2>
        <p>To see all of our boxes, head over to our shop:</p>
        <button>Shop Now</button>
      </S.TextContainer>
      <S.ProductContainer>
        {FEATURED_DATA.map(({ id, ...restProps }) => (
          <ProductCard key={id} {...restProps} />
        ))}
      </S.ProductContainer>
    </S.FeatContainer>
  );
}

export default Featured;
