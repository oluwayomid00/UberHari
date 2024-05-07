import React from "react";

const List = ({
  maxLiter,
  totalDistance,
  fuelCost,
  totalLiters,
  litersForAWeek,
  costForAWeek,
  proposedPayment,
}) => {
  return (
    <div className="card w-100 my-3">
      <div className="card-body">
        <p className="card-text">Max liter in 1 km = {maxLiter}L/km</p>
        <p>Distance in km: {totalDistance}</p>
        <p>Total liter spent in 1 day = {totalLiters}</p>
        <p>Total liter for 1 week = {litersForAWeek}</p>
        <p>Cost of 1 liter of fuel = {fuelCost}</p>
        <p>Total cost for 1 week = {costForAWeek}</p>
        <p className="">Proposed payment = Total cost for 1 week * 3 = {proposedPayment}</p>
      </div>
    </div>
  );
};

export default List;
