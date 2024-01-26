import { Link } from 'react-router-dom'
import Project from '../components/project-components/Project'

const Projects = () => {
  return (
    <section className='flex flex-col justify-center mt-10 gap-10 items-center'>
      <h1 className='text-center text-3xl lg:text-5xl font-kanit text-red-600'>
        My personal projects
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2 m-auto'>
        <Project
          img='https://i.postimg.cc/nrvRmxVN/Screenshot-1.png'
          tools='React, Tailwind CSS'
          desc='Facebook clone created with React and Tailwind'
          link='https://facebook-clone-eta-one.vercel.app/'
        />
        <Project
          img='https://i.postimg.cc/MK6b5V9n/epic.png'
          tools='React, Tailwind CSS'
          desc='Epic games clone with react'
          link='https://epic-games-alpha.vercel.app/'
        />
        <Project
          img='https://i.postimg.cc/t4zKf3j8/Screenshot-2.png'
          tools='React, Tailwind CSS'
          desc='Personal website to download applications'
          link='https://app-soft.netlify.app/'
        />
        <Project
          img='https://i.postimg.cc/vZxV2KF5/Screenshot-1.png'
          tools='React, Tailwind CSS'
          desc='E-Com website with multiple pages'
          link='https://megamartweb.vercel.app/'
        />
      </div>
      <Link
        to='https://github.com/beqa-dogonadze?tab=repositories'
        target='_blank'
        className='flex justify-center items-center text-red-600 text-2xl mt-6 bg-black rounded-xl h-[70px] shadow-lg shadow--600/20 p-2 mb-2 w-[350px]'
      >
        See more projects on
        <h1 className='hover:underline pl-1 text-white'>GitHub</h1>
      </Link>
    </section>
  )
}

export default Projects
