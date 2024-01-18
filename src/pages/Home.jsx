import { TypeAnimation } from 'react-type-animation'
import Skills from '../components/home/Skills'
import SocialMedia from '../components/home/SocialMedia'

const Home = () => {
  return (
    <section>
      <div className='text-center font-sora text-2xl md:text-4xl lg:text-5xl text-red-500 mt-10 h-[80px]'>
        <TypeAnimation
          sequence={[
            `Welcome, I am Beqa, React developer`,
            1000,
            'Welcome, I am Beqa',
            1000
          ]}
          wrapper='h1'
          speed={20}
          repeat={Infinity}
        />
      </div>
      <div className='bg-black rounded-xl p-2 border-2 border-gray-800 flex justify-center m-auto w-max '>
        <img src='https://i.ibb.co/NZ5BQJ5/bd.jpg' alt='bg'  className='w-[300px] md:lg:w-[400px]'/>
      </div>
      <div className='items-center gap-10 flex flex-col md:flex-row mt-14 lg:flex-row justify-around text-white ml-2'>
        {/* social media container */}
        <div>
          <h1 className='text-xl md:text-2xl lg:text-3xl'>FIND ME ON</h1>
          <SocialMedia />
        </div>
        {/* skills media container */}
        <div className='text-end'>
          <h1 className='text-xl md:text-2xl lg:text-3xl'>SKILLS</h1>
          <Skills />
        </div>
      </div>
    </section>
  )
}
export default Home
