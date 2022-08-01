import { useState, useEffect } from "react";
import "./Meal.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

export default function Meal({ item, meal, setMeal, user }) {
  const [updated, setUpdated] = useState(false);
  let tempMeal = meal;
  useEffect(() => {
    setMeal(tempMeal);
  }, [updated]);
  function removeItem(key) {
    tempMeal.splice(key, 1);
    setUpdated(!updated);
}
 let navigate = useNavigate()
  function createMeal(data) {
    axios({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        url: `http://localhost:3000/api/users/mealhistory`,
        method: 'POST',
        data: data,
    } )
    .then((response) => {
        navigate(`/api/users/mealhistory`)
    })
    // console.log(data)
}

 function saveButton(){
    console.log("in save button",tempMeal)
    createMeal(tempMeal)
    console.log(`I was clicked`)
 }

 function calculateCarbs(){
    // console.log(tempMeal)
    // tempMeal.map((item)=>{
    //   console.log(item)
    // })
    console.log(tempMeal[0].carbs)
 }

  return (
    <>
      <div className="meal-container">
        <h4>My Meal</h4>
        <div>
          {meal.map((item, key) => (
            <div className="fixfont" key={key}>
              {item.foodname} - Carbs: {item.carbs} {item.serving_size}
              <button className="btn-sm" onClick={() => removeItem(key)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        <div>
          <button className="btn btn-lg" onClick={() => calculateCarbs()}>
            Calculate Total Carbs
          </button>
        </div>
        <div>TOTAL</div>
      </div>
    </>
  );
}
