import FEATURED_DATA from "./featuredData";
import CATALOG_DATA from "./catalogData";

const initState = {
  featured: FEATURED_DATA,
  catalog: CATALOG_DATA,
  giftcards: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default productReducer;
