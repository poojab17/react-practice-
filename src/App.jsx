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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React , {useState, useEffect} from 'react';



function MyComponent(){
    const[width , setWidth] = useState(window.innerWidth);
const[height , setHeight] = useState(window.innerHeight);

//{Gets called multipled times}
// window.addEventListener("resize", handleResize);
// console.log("working..")

//{runs the event only once}
useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("working..");

    return () =>{
        window.removeEventListener("resize",handleResize);
        console.log("removed")
    }
} , []);

useEffect(() =>{
    document.title = `Size : ${width} x ${height}`;
}, [width, height]);

function handleResize(){
    setHeight(window.innerHeight);
     setWidth(window.innerWidth);
}
    return(<div>
        <p>Window width: {width} px</p>
        <p>Window Height: {height} px</p>
        </div>
    );
}

export default MyComponent;