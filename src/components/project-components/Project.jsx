const Project = ({ img, desc, tools }) => {
  return (
    <div className='w-[340px] h-[350px] max-h-[600px] space-y-3 p-3 flex flex-col rounded-2xl bg-[#1f2020] shadow-lg shadow-gray-500/20'>
      <img
        src={img}
        alt={desc}
        className='rounded-2xl hover:scale-105 duration-200'
      />
      <h1 className='text-red-600 text-xl'>{tools}</h1>
      <h1 className='text-white text-2xl hover:text-red-600 w-fit'>{desc}</h1>
    </div>
  )
}
export default Project
