import './SidebarElement.css'
import Category from '../component/Category/Category'
function SidebarElement() {
  const SortOrder = [
    { title: 'Most popular' },
    { title: 'Women’s fashion'},
    { title: 'Kids & Toys'},
    { title: 'Accessories'},
    { title: 'Cosmetics'},
    { title: 'Shoes' },
    { title: 'Sports' },
  ]
  const SortOrderbut =[
    { title: 'Most popular' },
    { title: 'Best Rating' },
    { title: 'Newest' },
    { title: 'PriceLow-High' },
    { title: 'PriceHigh-Low' },
  ]

  const SortOrderElement = SortOrder.map((SortTitle,index)=>{
    return <Category title={SortTitle.title} type="checkbox" key={index}/>
  })

  const SortOderbutElement = SortOrderbut.map((Sortbut,index)=>{
    return <Category title={Sortbut.title} type="radio" key={index}/>
  })
  
  return (
    <div className='Sidebar hidden max-w-[300px] fixed  top-20 left-12 truncate bg-white md:flex w-1/4 xl:flex flex-col'>

      <div className="Category flex flex-col gap-y-2 border-b-2 border-gray-500 pb-5">
        <h4 className='my-3 font-bold text-lg'>Category</h4>
        {SortOrderElement}
      </div>

      <div className="price-range">
        <h4 className='font-bold text-lg pt-4'>Price range</h4>
        <div className="range-input">
          
        </div>

        <div className="MinMaxPrice flex flex-wrap w-full border-b-2 border-b-gray-400 pt-2 pb-7 gap-2">
          <div className="MinPrice w-1/2">
            <p>Min price</p>
            <input type="text" className='border-2 rounded-full max-w-1/2 m-0 '/>
          </div>
          <div className="Maxprice w-1/2">
            <p>Max price</p>
            <input type="text" className='border-2 rounded-full max-w-1/2'/>
          </div>
        </div>
      </div>
    

      <div className="sort-order flex flex-col gap-y-2 pt-4">
        <h4 className='font-bold text-lg'>Sort order</h4>
        {SortOderbutElement}
      </div>
    </div>
    
  )
}

export default SidebarElement