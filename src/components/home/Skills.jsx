import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { MdOutlineCss } from 'react-icons/md'
import { SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='flex gap-5 mt-2 text-2xl md:text-3xl lg:text-4xl'>
      <div className='rounded-md p-4 bg-gray-900 shadow-md  shadow-red-500/50 hover:scale-110'>
        <FaReact />
      </div>
      <div className='rounded-md p-4 bg-gray-900 shadow-md  shadow-red-500/50 hover:scale-110'>
        <SiTailwindcss />
      </div>
      <div className='rounded-md p-4 bg-gray-900 shadow-md  shadow-red-500/50 hover:scale-110'>
        <IoLogoJavascript />
      </div>
      <div className='rounded-md p-4 bg-gray-900 shadow-md  shadow-red-500/50 hover:scale-110'>
        <MdOutlineCss />
      </div>
    </div>
  )
}
export default Skills
