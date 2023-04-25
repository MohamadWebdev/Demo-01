import { bg5 } from "../assets"

const NewsSubscription = () => {
  return (
    <div className='w-full flex lg:h-[700px] lg:flex-row flex-col relative justify-between items-end'>
      <div className="lg:w-[70%] lg:h-full w-[100%] lg:absolute">
        <img src={bg5} alt="bg5" className="w-full" />
      </div>
      
      <div className="z-[20] lg:h-full w-full items-center lg:items-end lg:pt-[10rem] flex flex-col">
        <p className="text-[35px] max-w-[750px] font-[500] uppercase lg:text-right text-center">subscribe to our newsletter <br />
        and find out the dates, awards and <br />
        modalities of the great race.</p>

        <input 
          className="h-[40px] lg:max-w-[650px] w-[80%] text-[20px] mt-[4rem] bg-transparent border-[5px] pl-[1.5rem] uppercase text-white lg:w-full " 
          type="text" 
          placeholder="email" 
        />

        <input 
          className="h-[40px] lg:max-w-[650px] w-[80%] text-[20px] mt-[2rem] font-[900] uppercase text-primary bg-white lg:w-full" 
          type="submit"
          value={'next step'} 
        />

        <p className="text-right lg:max-w-[600px] w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        
      </div>

      
    </div>
  )
}

export default NewsSubscription