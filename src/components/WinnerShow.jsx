import { bg6 } from '../assets'


const WinnerShow = () => {
  return (
    <>
    <div className='mt-[10rem] lg:mt-[0rem] h-[800px] flex flex-col justify-center items-center relative'>
      <img src={bg6} className='' />

      <div className='flex lg:pt-[0] pt-[5rem] z-[100] justify-center items-center flex-col lg:flex-row lg:absolute lg:h-[440px] lg:items-end'>
        <p className='md:text-[100px] sm:text-[90px] max-w-[540px] lg:leading-[5.6rem] leading-[3.6rem] md:leading-[5rem] sm:leading-[4.5rem] text-center lg:text-[120px] text-[70px] font-[900] bordered-text text-transparent'>LEONARD STUART</p>

        <p className='lg:text-left text-center lg:mb-[-15px] mt-[2rem] lg:ml-[-25px] text-[28px] font-[300]'>WINNER OF <br /> 4 CONSECUTIVE RACES</p>

        
      </div>

      <input className="h-[40px] z-[15] lg:mt-[7rem] font-[900] text-[20px] uppercase text-primary bg-white px-[5rem]" type="submit" value={'LEARN MORE ABOUT HIS EXPERIENCE'} />
      
    </div>

     

    </>
  )
}

export default WinnerShow