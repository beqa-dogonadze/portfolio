import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <div className='text-center text-2xl md:text-4xl lg:text-5xl font-bold text-red-500 mt-24'>
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
  )
}
export default Home
