import React, { useEffect, useState } from "react";
import Card from "../Card";
import List from "../List";

const AllEntries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedlist, setLoadedList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://uberhari-61e55-default-rtdb.firebaseio.com/listofentries.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const items = [];

        for(const key in data ){
            const item = {
                id: key,
                ...data[key]
            }
            items.push(item)
        }
        setIsLoading(false);
        setLoadedList(items);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <Card>
      <div>
        <h1>List of Entries</h1>
        {loadedlist.map((item) => (
          <List
            key={item.id}
            id={item.id}
            maxLiter={item.liters}
            totalDistance={item.distance}
            fuelCost={item.cost}
            totalLiters={item.totalLiters}
            litersForAWeek={item.litersForAWeek}
            costForAWeek={item.costForAWeek}
            proposedPayment={item.proposedPayment}
          />
        ))}
      </div>
    </Card>
  );
};

export default AllEntries;
