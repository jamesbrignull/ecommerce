import React from "react";
import * as S from "./Featured.style";

function Featured() {
  return (
    <S.FeatContainer>
      <S.TextContainer>
        <h2>Featured Boxes</h2>
        <p>To see all of our boxes, head over to our shop:</p>
        <button>Shop Now</button>
      </S.TextContainer>
      <S.ProductContainer>Products blah blah</S.ProductContainer>
    </S.FeatContainer>
  );
}

export default Featured;
