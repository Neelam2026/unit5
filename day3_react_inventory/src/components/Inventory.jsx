import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    
  });


  const handle_inventory=(value,key)=>{
    if(inv[key]===0){
       return  
    }

    inv[key]=inv[key]+value;

     return   setInv({
     books: inv.books,
    notebooks: inv.notebooks,
    pens: inv.pens,
    
     })
  }
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>handle_inventory(1,"books")}>+</button>
        <button className="circlularButton" onClick={()=>handle_inventory(-1,"books")}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>handle_inventory(1,"notebooks")}>+</button>
        <button className="circlularButton" onClick={()=>handle_inventory(-1,"notebooks")}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>handle_inventory(1,"pens")}>+</button>
        <button className="circlularButton" onClick={()=>handle_inventory(-1,"pens")}>-</button>
        <span>{inv.pens}</span>
      </div>
      
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens}
    </div>
  );
};