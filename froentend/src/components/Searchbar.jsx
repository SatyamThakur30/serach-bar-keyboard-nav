import React, { useContext, useState } from "react";
import { Searchcontext } from "../context/Searchcontext";

export default function Searchbar() {
  const searchState = useContext(Searchcontext);
  const [current, setCurrent] = useState(0);
  const handleKeypress = (e) => {
    let length = searchState.lists.length;


    if (!length) return;
    // check if key press is arrow down
    
    if (e.keyCode === 40) {

      if (current >= 0) {
        searchState.lists[current].style.color = "red";
      } else {
        searchState.lists[length - 1].style.color = "black";
      }
      if(current>0){
        searchState.lists[current - 1].style.color = "black";

      }

      console.log(current);

      if (current < length-1) {
        setCurrent(current + 1);
      } else {
        setCurrent(-1); 
      }
    }
  };
  return (
    <div>
      <input
        type={"search"}
        onChange={(e) => searchState.handleInput(e.target.value)}
        onKeyDown={handleKeypress}
        placeholder="search by name address,name,id,pincode"
      />
    </div>
  );
}
