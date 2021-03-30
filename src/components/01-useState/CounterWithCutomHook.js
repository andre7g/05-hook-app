import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './Counter.css';

export const CounterWithCutomHook = () => {
    
    const {state, increment, decrement, reset} = useCounter(100);
    
    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr></hr>
            <button className="btn" onClick={()=> increment(10) }>+1</button>
            <button className="btn" onClick={ reset }>Reset</button>
            <button className="btn" onClick={()=> decrement(5) }>-1</button>
        </>
    )
}
