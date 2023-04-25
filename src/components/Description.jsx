import { bg8 } from '../assets'

const Description = () => {
  return (
    <div className='flex-col h-[1000px] relative w-full flex lg:justify-center justify-around items-center mt-[5rem]'>
      <div className='w-full flex h-full justify-center items-start absolute z-[-1]'>
        <img src={bg8} alt="bg8" className='lg:w-[60%] md:w-[90%] w-[90%]' />
      </div>

      <div className='uppercase lg:mt-[0rem] mt-[2rem] w-[70%] flex flex-col justify-center items-center '>
        <p className='text-[20px]'>What is</p>

        <h1 className='text-center lg:text-[60px] md:text-[50px] text-[40px] font-[1000]'>mountain <br /> biking</h1>
      </div>

      <div className='lg:w-[70%] md:w-[80%] w-[90%] flex justify-center items-start lg:my-[2rem] flex-col lg:flex-row'>
        <div className='flex-1 mx-[2rem]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        </div>

        <div className='flex-1 mx-[2rem]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <br />
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        </div>
      </div>

      <p className='font-yellowtail text-[56px] lg:mb-[0rem] mb-[2rem]'>Bike Lovers</p>
    </div>
  )
}

export default Description