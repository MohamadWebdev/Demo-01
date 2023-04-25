import { bg3, bg3mask } from "../assets"


const Hero = () => {
  return (
    <div className="w-full relative z-[-1]">
      {/* image */}
      <div className="lg:flex z-[-1] justify-end w-full lg:absolute hidden">
        <div className="w-full flex justify-end items-end">
          <img src={bg3mask} alt="bg3mask" className="absolute z-[-2] bg-top" />
          <img src={bg3}     alt="bg3"     className=" z-[-1]"/>
        </div>
      </div>

      {/* texts */}
      <div className="w-full z-[2]">
        <h1 className="sm:text-[30px] text-[25px] uppercase font-[500] max-w-[550px]">What makes mountain <br /> biking different?</h1>

        <p className="text-[20px] mt-[2rem] max-w-[550px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

        <p className="text-[20px] mt-[2rem] max-w-[550px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

        <div className="relative max-w-[830px] md:text-[94px] sm:text-[70px] xs:text-[50px] text-[40px] mt-[5rem]">
          <h1 className="uppercase absolute font-[900] bordered-text text-transparent">versatile sport</h1>
          <h1 className="uppercase font-[900] masked-element">versatile sport</h1>
        </div>
      </div>

      {/* image: mobile size */}
      <div className="lg:hidden z-[-1] justify-end w-full lg:absolute flex mt-[8rem]">
        <div className="w-full flex justify-end items-end">
          <img src={bg3mask} alt="bg3mask" className="absolute z-[-2] bg-top" />
          <img src={bg3}     alt="bg3"     className=" z-[-1]"/>
        </div>
      </div>

      {/* contact list */}
      <div className="max-w-[600px] z-[2] lg:mt-[20rem]">
        <p className="sm:text-[50px] text-[40px] uppercase">register and <br /> participate <br /> in the great mountain <br /> bike race 2022 </p>

        <form className="flex mt-[3rem] flex-col justify-center items-center w-full gap-8 text-[20px] font-[500] ">
          <input className="h-[40px] bg-transparent border-[5px] pl-[1.5rem] uppercase text-white w-full" type="text" placeholder="category" />
          <input className="h-[40px] bg-transparent border-[5px] pl-[1.5rem] uppercase text-white w-full" type="text" placeholder="name" />
          <input className="h-[40px] bg-transparent border-[5px] pl-[1.5rem] uppercase text-white w-full" type="text" placeholder="email" />
          <input className="h-[40px] font-[900] uppercase text-primary bg-white w-full" type="submit" value={'next step'} />
        </form>

        <p className="pt-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      </div>
    </div>
  )
}

export default Hero