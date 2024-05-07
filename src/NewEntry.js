import React, { useRef } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const NewEntry = () => {
  const litersRef = useRef();
  const distanceRef = useRef();
  const costRef = useRef();
  const history = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    const enteredLiters = litersRef.current.value;
    const enteredDistance = distanceRef.current.value;
    const enteredCost = costRef.current.value;
    const totalLiters = enteredLiters * enteredDistance;
    const litersForAWeek = totalLiters * 5;
    const costForAWeek = enteredCost * litersForAWeek;
    const proposedPayment = costForAWeek *3;

    const enteredData = {
      liters: enteredLiters+'Liters',
      distance: enteredDistance+'km',
      totalLiters: totalLiters+'Liters',
      cost: '$'+enteredCost,
      litersForAWeek: litersForAWeek+'Liters',
      costForAWeek: '$'+costForAWeek,
      proposedPayment: '$'+proposedPayment
    };

    fetch(
      "https://uberhari-61e55-default-rtdb.firebaseio.com/listofentries.json",
      {
        method: "POST",
        body: JSON.stringify(enteredData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        history("/list");
    });
  }

  return (
    <Card>
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="col-12 col-md-4">
          <input
            type="text"
            class="form-control"
            placeholder="How many liters used for 1km"
            aria-label="liters"
            required
            ref={litersRef}
          />
        </div>
        <div className="col-12 col-md-4">
          <input
            type="text"
            class="form-control"
            placeholder="Distance (km) traveled to drop Daniel"
            aria-label="distance"
            required
            ref={distanceRef}
          />
        </div>
        <div className="col-12 col-md-4">
          <input
            type="text"
            class="form-control"
            placeholder="Cost of fuel ($) per liter"
            aria-label="cost"
            required
            ref={costRef}
          />
        </div>
        <div class="col-12 d-flex justify-content-center">
          <button type="submit" class="btn btn-primary ">
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewEntry;
