import React from 'react';
import {useState} from 'react';


function MyComponent(){
    const[foods, setFood] = useState(['Apple', 'Orange','Banana']);

    function handleAddFoodItem(){

    }

    function handleRemoveFoodItem(){

    }

    return (<div>
        <h2>List of food</h2>
        <ul>
            {foods.map((food,i) => <li key ={i}>{food}</li>)}
        </ul>
        </div>
);
}

export default MyComponent;