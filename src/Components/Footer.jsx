import React from 'react'

export default function Footer() {
  
    const year=new Date().getFullYear();
 const style1={
  paddingTop:'20px'
 }
  return (
    <div id="footer">
      <p style={style1}>        &#x00A9; {year}  All copy Rights Reserved Moviedux
      </p>
    </div>
  )
}
