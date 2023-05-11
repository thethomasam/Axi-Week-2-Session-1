import React, { useState } from 'react'

export default function Counter({ onClick }) {
    const [counter, setCounter] = useState(0)
    function handleIncrement() {
        setCounter((counter) => counter + 1)

    }
    function handleDecrement() {
        setCounter((counter) => counter - 1)

    }

    return (
        <div>Counter
            <button onClick={onClick}>Increment</button>

        </div>
    )
}
