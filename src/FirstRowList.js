import React from 'react'
import FirstRow from './FirstRow'

export default function FirstRowList({numbers}) {
  var color = "white";
  var backgroundColor1 = "red";
  return (
    numbers.map((number, index) => {
      if(number%3===0 || number%5===0)
        return <FirstRow key={index} number={number} color={color} backgroundColor1={backgroundColor1} />
      else
        return <FirstRow key={index} number={number} color={""} backgroundColor1={""}  />
      })
  )
}
