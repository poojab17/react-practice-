import React from 'react';
import {useState} from 'react';


function MyComponent(){
    const[foods, setFood] = useState(['Apple', 'Orange','Banana']);

    function handleAddFoodItem(){
        const inputFood = document.getElementById("inputEle").value;
        document.getElementById("inputEle").value = "";

        setFood(f => ([...f, inputFood]));


    }

    function handleRemoveFoodItem(index){
        setFood(foods.filter((_, i) => i !== index));
    }

    return (<div>
        <h2>List of food</h2>
        <ul>
            {foods.map((food,i) => 
            <li key ={i}
                onClick = {() => handleRemoveFoodItem(i)}>
                {food}
            </li>
            )}
        </ul>
        <input id = 'inputEle' placeholder='Enter Food'/>
        <button onClick = {handleAddFoodItem}>Add Food</button>
        </div>
);
}

export default MyComponent;