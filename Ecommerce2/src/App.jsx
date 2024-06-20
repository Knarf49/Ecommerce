import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './db/data'
import ProductItem from './component/ProductItem'
import SidebarElement from './Sidebar/SidebarElement'
import NavSection from './NavSection/Nav'

function App() {
  const [searchText, setSearchText] = useState('');


  const filteredProduct = Products.filter((product) => {
    return product.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      <NavSection/>
      <div id="content" className='container mx-auto'>
        <div className="searchbar fixed top-3 left-1/2">
          <input type="text"
            placeholder='Search our product...'
            className='border-2 hidden border-gray-500 rounded-full md:block'
            value={searchText}
            onChange={(event)=>{setSearchText(event.target.value)}}
          />
        </div>
        <SidebarElement />
        <button className='block absolute left-5 top-6 border-2 border-gray-400 py-2 px-4 rounded-full bg-white md:hidden'>Category</button>
        <ProductItem/>
        
      </div>

    </>
  )
}

export default App
