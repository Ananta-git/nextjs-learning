'use client' //for interactivity

import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState<number>(0);     
    return (
        <div className="text-center my-4">
            <p className="text-2xl mb-4">Count: {count}</p>
            <button
                onClick={() => setCount(count+1)}
                className="bg-blue-500 text-white px-4 py-2 rouned hover:bg-blue-600">
                    Increment
                </button>
        </div>
    )
}