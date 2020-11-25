import React from "react";
import styled from "styled-components/macro";
import ShopInfo from "../components/ShopInfo/ShopInfo";
import ProductCard from "../components/ProductCard/ProductCard";
// import ProductDetail from "../components/ProductDetail/ProductDetail";
import CATALOG_DATA from "../redux/Products/catalogData";

function Shop() {
  return (
    <div>
      {/* <ProductDetail /> */}
      <ShopInfo />
      <ProductContainer>
        {CATALOG_DATA.map((item) => (
          <ProductCard key={item.id} item={item} />
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
