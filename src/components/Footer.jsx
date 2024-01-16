import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

import { SiGmail } from 'react-icons/si'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full h-[60px]'>
      <div className='flex justify-center items-center text-6xl text-white gap-5 '>
        <Link to='https://github.com/beqa-dogonadze' target='_blank'>
          <FaGithub className='p-3 rounded-full hover:bg-red-950'/>
        </Link>
        <Link
          to='https://www.facebook.com/profile.php?id=100090537693513'
          target='_blank'
        >
          <FaFacebook className='p-3 rounded-full hover:bg-red-950'/>
        </Link>
        <Link
          to='https://www.linkedin.com/in/beqa-dogonadze-63a509284/'
          target='_blank'
        >
          <FaLinkedin className='p-3 rounded-full hover:bg-red-950'/>
        </Link>
        <Link
          to='https://www.linkedin.com/in/beqa-dogonadze-63a509284/'
          target='_blank'
        >
          <SiGmail className='p-3 rounded-full hover:bg-red-950'/>
        </Link>
      </div>
    </footer>
  )
}
export default Footer
