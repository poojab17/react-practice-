// import React from 'react';

// import {useState} from 'react';


// function MyComponent(){
//     const[foods, setFood] = useState(['Apple', 'Orange','Banana']);

//     function handleAddFoodItem(){
//         const inputFood = document.getElementById("inputEle").value;
//         document.getElementById("inputEle").value = "";

//         setFood(f => ([...f, inputFood]));


//     }

//     function handleRemoveFoodItem(index){
//         setFood(foods.filter( (_, i) => i !== index));
//     }

//     return (<div>
//         <h2>List of food</h2>
//         <ul>
//             {foods.map((food,i) => 
//             <li key ={i}
//                 onClick = {() => handleRemoveFoodItem(i)}>
//                 {food}
//             </li>
//             )}
//         </ul>
//         <input id = 'inputEle' placeholder='Enter Food'/>
//         <button onClick = {handleAddFoodItem}>Add Food</button>
//         </div>
// );
// }

// export default MyComponent;

//useEffect

// import React, {useState, useEffect} from 'react';

// function MyComponent(){
//     const[count, setCount] = useState(0);

//     useEffect(() => {
//         document.title = `My counter : ${count}`;
//     },[count]);

//     function addCount(){
//         setCount( c => c+1);
//     }

//     function subCount(){
//         setCount( c => c-1);
//     }

//     return (
//         <div>
//             <p>Count : {count}</p>
//             <button onClick = {addCount}>Add +1 to count </button>
//              <button onClick = {subCount}>Sub -1 to count </button>
//         </div>
//     )
// }

// export default MyComponent;