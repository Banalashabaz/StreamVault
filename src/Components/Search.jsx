import React, { useState } from 'react'

export default function Search() {
    const [search,setSearch]=useState('')
    function handlesubmit(e){
        e.preventDefault();
        console.log(search);
    } 
  return (
    <form>
        <input type='text' placeholder='SearchMovies' id='search' onChange={(e)=>setSearch(e.target.value)}></input>
    </form>
  )
}
