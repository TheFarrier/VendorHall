import React from "react";

const FilterContext = React.createContext({
  tagFilter: "",
  priceFilter: [],
  setTagFilter: () =>{},
  setPriceFilter: () =>{},
});

export default FilterContext;