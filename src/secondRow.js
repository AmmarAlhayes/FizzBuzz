import React from 'react'

export default function secondRow({number,color,backgroundColor2}) {
  
  return (
    <td style={{
      color: color,
      backgroundColor: backgroundColor2,}}
    >
      {number}
    
    </td>
    //element
  )
}
