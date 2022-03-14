import React from 'react'
import {useLocation} from 'react-router-dom'
export const Country = () => {
let {state} = useLocation()
console.log('stare',state);
  return (
    <div>Country</div>
  )
}
