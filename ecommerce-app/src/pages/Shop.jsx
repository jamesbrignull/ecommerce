import React from "react";
import styled from "styled-components/macro";
import ShopInfo from "../components/ShopInfo/ShopInfo";
import ProductCard from "../components/ProductCard/ProductCard";
// import ProductDetail from "../components/ProductDetail/ProductDetail";
// Redux & State
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProductItems } from "../redux/Products/productSelectors";

function Shop({ product }) {
  return (
    <div>
      {/* <ProductDetail /> */}
      <ShopInfo />
      <ProductContainer>
        {product.map((item) => (
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

const mapStateToProps = createStructuredSelector({
  product: selectProductItems,
});

export default connect(mapStateToProps)(Shop);
