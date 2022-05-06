import React from 'react'
import SecondRow from './secondRow'

export default function SecondRowList({numbers}) {
    var color = "white";
    var backgroundColor2 = "limegreen";
    
  return (
    numbers.map((number, index) => {

        if(number%3===0 && number%5===0){
            return <SecondRow key={index} number={"FizzBuzz"} color={color}  backgroundColor2={backgroundColor2} />
        }
        else if(number%3===0){
            return <SecondRow key={index} number={"Fizz"} color={color} backgroundColor2={backgroundColor2} />
        }
        else if(number%5===0){
            return <SecondRow key={index} number={"Buzz"} color={color}  backgroundColor2={backgroundColor2} />
        }
        else {
            return <SecondRow key={index} number={number} color={""} backgroundColor2={""} />
        }
      })
  )
}
