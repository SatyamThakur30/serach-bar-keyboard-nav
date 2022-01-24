import React, { useContext } from "react";
import { Searchcontext } from "../context/Searchcontext";
import SingleList from "./SingleList";

export default function Lists() {
  const searchContext = useContext(Searchcontext);
  console.log(searchContext.isDataEmpty);
  return (
    <div>
      {searchContext.filterData.map((item) => (
        <SingleList key={item.id} data={item} />
      ))}
      {searchContext.isDataEmpty && <h3 style={{marginTop:"20px"}}>No user founder</h3>}
    </div>
  );
}
