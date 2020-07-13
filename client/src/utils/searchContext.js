import React from "react";

const SearchContext = React.createContext({
  search: "",
  setSearch: () =>{},
});

export default SearchContext;