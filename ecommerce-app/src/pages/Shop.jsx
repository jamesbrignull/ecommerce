import React from "react";
import ShopInfo from "../components/ShopInfo/ShopInfo";
import ProductCard from "../components/ProductCard/ProductCard";
import CATALOG_DATA from "../redux/Products/catalogData";
import styled from "styled-components/macro";

function Shop() {
  return (
    <div>
      <ShopInfo />
      <ProductContainer>
        {CATALOG_DATA.map(({ id, ...restProps }) => (
          <ProductCard key={id} {...restProps} />
        ))}
      </ProductContainer>
    </div>
  );
}

const ProductContainer = styled.div`
  margin: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

export default Shop;
