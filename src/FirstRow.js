import React from 'react'

export default function FirstRow({number,color,backgroundColor1}) {
  return (
    <td style={{
      color: color,
      backgroundColor: backgroundColor1,}}
    >
      {number}
    </td>
  )
}
