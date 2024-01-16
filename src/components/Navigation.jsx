import { SiWebpack } from 'react-icons/si'
import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <header>
      <nav className='flex justify-between bg-black text-2xl h-[150px] border-b border-gray-700'>
        <div className='text-white flex items-center ml-10 gap-5 text-4xl'>
          <h1 className='font-bold'>
            <Link to='/'>Beqa D.</Link>
          </h1>
          <Link to='/'>
            <SiWebpack className='text-red-500' />
          </Link>
        </div>
        <ul className='flex justify-between gap-20 items-center text-red-600 font-lato'>
          <li className='p-3 hover:bg-[#252325] rounded-md'>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-3 hover:bg-[#252325] rounded-md'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='p-3 hover:bg-[#252325] rounded-md'>
            <Link to='/about'>About me</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <Outlet />
    </header>
  )
}
export default Navigation
