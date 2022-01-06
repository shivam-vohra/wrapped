import React from "react";
import Store from "./Store"



export default function TopStores({ TopStoresData }) {
  var sortedTopStores = TopStoresData.sort((a,b)=> a.spent > b.spent ? -1: 1 )

  for(var i = 0; i < sortedTopStores.length; i++){
    sortedTopStores[i]["rank"] = i + 1
  }

  console.log(sortedTopStores)
  return(
  <div className="stores-wrapper">
  <h3>Your top stores</h3>
  <hr></hr>
  {sortedTopStores.map(fakeRow => (
      <Store row={fakeRow}></Store>

  ))}

  </div>
    
    );





}