import React, { useState } from 'react';
import './Counter.css';

export const CounterApp = () => {

    const [state, setstate] = useState({
        Counter1: 10,
        Counter2: 20,
        Counter3: 30,
        Counter4: 40
    });

    const { Counter1, Counter2 } = state;


    return (
        <>
          <h1>Counter1 { Counter1 }</h1>
          <h1>Counter2 { Counter2 }</h1>
          <hr></hr>  

          <button className="btn btn-primary"
                    onClick= { ()=>{
                        setstate( { 
                            ...state,
                            Counter1: Counter1 + 1
                        } );
                    } }
          >
              +1
          </button>
        </>
    )
}
