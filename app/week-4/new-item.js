'use client'
import React from 'react'
import { useState } from 'react'

const NewItem = () => {
    const [quantity, setQuantity] = useState(1);

const increment = () => {
    setQuantity(quantity + 1);
}

const decrement = () => {
    quantity>1? setQuantity(quantity - 1): quantity;
}
  return (
    <div className='bg-white shadow-white h-fit flex rounded-lg '>
        <button onClick={increment} disabled={quantity < 20 ? false : true} className={`w-20 h-20 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md m-5 ${quantity>=20? 'bg-slate-600 hover:bg-slate-600 pointer-events-none' :''}`} >+</button>
        <div className='text-7xl items-center justify-center flex'>{quantity}</div>
        <button onClick={decrement} disabled={quantity<1 ? true:false} className={`w-20 h-20 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-md m-5 ${quantity<=1? 'bg-slate-600 hover:bg-slate-600 pointer-events-none' :''}`} >-</button>
    </div>
  )
}

export default NewItem