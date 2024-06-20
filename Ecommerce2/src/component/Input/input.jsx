import { useState } from 'react';
import './input.css'
import { CiSearch } from "react-icons/ci";
import Products from '../../db/data'

function input() {
  const [searchText,setSearchText] = useState('');
  return (
    <input type="text" className='bg-gray-300 rounded-full' placeholder='Search in products...'
      value={searchText} onChange={(event)=>{setSearchText(event.target.value)}}
    />
  )
}

export default input