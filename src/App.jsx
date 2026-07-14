import {useState} from 'react';
import "./App.css";
const opt = ['Bell pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

export default function PersonalPizza(){
    const[select , setSelect] = useState([]);

    const toggleToppings = ({target})  =>  {
        const clickedToppings = target.value;

    setSelect(prev => {
        if(prev.includes(clickedToppings)){
            return prev.filter(t => t !== clickedToppings)
        }

        else{
            return [clickedToppings, ...prev]
        }
    });
}
    return(
        <div>
            {opt.map(i => (
                <button value={i} onClick={toggleToppings} key={i}>
                    {select.includes(i) ? 'Remove' : "Add"} {i}
                </button>
            ))}

            <p>Ordered Pizza : {select.join(',')}</p>
        </div>
    );
}

