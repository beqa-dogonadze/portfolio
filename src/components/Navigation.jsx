import { SiWebpack } from 'react-icons/si'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  return (
    <header>
      <nav className='flex justify-between bg-black text-2xl h-[100px] border-b border-gray-700'>
        <div className='text-white flex items-center ml-10 gap-5 text-4xl'>
          <h1 className='font-bold'>
            <Link to='/'>
              Beqa <span className='text-red-500'>D</span>.
            </Link>
          </h1>
          <Link to='/'>
            <SiWebpack className='text-red-500' />
          </Link>
        </div>
        <ul className='flex justify-between gap-20 items-center text-white font-lato'>
          <li
            className={`p-3 hover:bg-[#252325] rounded-md ${
              location.pathname === '/' ? 'text-red-700 bg-[#252325]' : ''
            }`}
          >
            <Link to='/'>Home</Link>
          </li>
          <li
            className={`p-3 hover:bg-[#252325] rounded-md ${
              location.pathname === '/projects'
                ? 'text-red-700 bg-[#252325]'
                : ''
            }`}S
          >
            <Link to='/projects'>Projects</Link>
          </li>
          <li
            className={`p-3 hover:bg-[#252325] rounded-md ${
              location.pathname === '/about' ? 'text-red-700 bg-[#252325]' : ''
            }`}
          >
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
