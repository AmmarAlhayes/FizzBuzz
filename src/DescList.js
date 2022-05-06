import React from 'react'
import Desc from './Desc'

export default function DescList({numbers}) {
  return numbers.map((number, index) => {
    if(number%3===0 && number%5===0)
      return <Desc key={index} number={number+" mod 3=0 und "+number+" mod 5=0"}/>
    else if(number%3===0)
      return <Desc key={index} number={number+" mod 3=0"}/>
    else if(number%5===0)
      return <Desc key={index} number={number+" mod 5=0"}/>
    else
      return <Desc key={index} number={""}/>
  })
}
