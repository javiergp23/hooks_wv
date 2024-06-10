import React from "react"
import { useState } from 'react'

export const CounterApp = () =>{
    
    const [ counter1, setCounter ] = useState(10)
    
    return (
        <>
            <div>
                <h1>Counter1: { counter1 }</h1>
                <hr />
                <h2>Hola mundo</h2>
                <div>
                    
                </div>
                <button className="btn border-primary"  onClick={ () => setCounter( counter1 + 1) }>+1</button>
            </div>
        </>
    )
}


