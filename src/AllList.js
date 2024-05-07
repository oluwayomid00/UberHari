import React from "react";
import List from "./List";

const AllList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
          <List
            key={item.id}
            id={item.id}
            maxLiter={item.liters}
            totalDistance={item.distance}
            fuelCost={item.cost}
          />
      ))}
    </ul>
  );
};

export default AllList;
