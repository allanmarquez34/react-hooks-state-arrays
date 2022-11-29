import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy]= useState("All");

  const foodsToDisplay = foods.filter((food)=>{
    if(filterBy=== "All"){
      return true;
    }else{
      return food.cuisine === filterBy
    }
  })

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
    console.log(newFood);
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  function handleClick(id){
    const newFoodArray = foods.map((food) => {
      if (food.id === id){
        return {
          ...food,
          heatLevel: food.heatLevel+1
        }
      }else{
        return food
      }
    })
    setFoods(newFoodArray)
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
