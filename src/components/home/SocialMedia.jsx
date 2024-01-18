import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { SiVercel } from 'react-icons/si'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return (
    <div className='flex gap-5 mt-2 text-2xl md:text-3xl lg:text-4xl'>
      <div className='rounded-md p-4 bg-gray-900 shadow-md  shadow-red-500/50 hover:scale-110'>
        <Link
          target='_blank'
          to='https://www.facebook.com/profile.php?id=100090537693513'
        >
          <FaFacebookF />
        </Link>
      </div>
      <div className='rounded-md p-4 bg-gray-900 shadow-md  shadow-red-500/50 hover:scale-110'>
        <Link target='_blank' to='https://github.com/beqa-dogonadze'>
          <FaGithub />
        </Link>
      </div>
      <div className='rounded-md p-4 bg-gray-900 shadow-md  shadow-red-500/50 hover:scale-110'>
        <Link
          target='_blank'
          to='https://www.linkedin.com/in/beqa-dogonadze-63a509284/'
        >
          <FaLinkedinIn />
        </Link>
      </div>
      <div className='rounded-md p-4 bg-gray-900 shadow-md  shadow-red-500/50 hover:scale-110'>
        <Link target='_blank' to='https://vercel.com/beqa-dogonadzes-projects'>
          <SiVercel />
        </Link>
      </div>
    </div>
  )
}
export default SocialMedia
