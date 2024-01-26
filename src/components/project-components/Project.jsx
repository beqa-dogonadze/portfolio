import { Link } from 'react-router-dom'

const Project = ({ img, desc, tools, link }) => {
  return (
    <div className='w-[340px] h-[350px] max-h-[600px] space-y-3 p-3 flex flex-col rounded-2xl bg-gradient-to-b from-[#161515]  to-black shadow-lg shadow-red-500/30'>
      <img
        src={img}
        alt={desc}
        className='rounded-2xl hover:scale-105 duration-200'
      />
      <h1 className='text-red-600 text-xl'>{tools}</h1>
      <Link
        to={link}
        target='_blank'
        title='Go to website'
        className='text-white text-2xl hover:text-red-600 w-fit'
      >
        {desc}
      </Link>
    </div>
  )
}
export default Project
