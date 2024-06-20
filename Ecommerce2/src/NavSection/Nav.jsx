import './Nav.css'
import Input from '../component/Input/input'
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function Nav() {
  return (
    <nav className='hidden justify-between items-center h-[70px] fixed w-screen px-7 max-w-full border-b-2 border-gray-300 bg-white md:flex'>
      <div className="logo">Logo</div>
      <div className="right flex gap-x-2">
        <CiUser />
        <CiShoppingCart />
      </div>
    </nav>
  )
}

export default Nav