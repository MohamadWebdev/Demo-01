import { bg7, logo2 } from "../assets"

const LogoSection2 = () => {
  return (
    <div className=" flex-col lg:h-[800px] lg:mt-[2rem] h-[1000px] w-full flex lg:justify-center justify-between items-start">

      <div className="absolute lg:w-[50%] w-[100%] lg:opacity-[1] opacity-[0.5] right-0">
        <img src={bg7} alt="bg7" className="w-full" />
      </div>

      <div className="lg:w-[50%] w-[100%] h-full lg:ml-[120px] flex justify-end items-center flex-col">
        <div className="w-[200px] h-[200px] relative mix-blend-">
          <img src={logo2} alt="logo" className="w-full " />
        </div>

        <div className="relative lg:max-w-[900px] w-full lg:text-[84px] md:text-[115px] sm:text-[90px] xs:text-[75px] text-[50px] mt-[5rem]">
          <h1 className="text-center sm:leading-[8rem] uppercase absolute font-[900] bordered-text text-transparent">a fascinating world</h1>
          <h1 className="text-center sm:leading-[8rem] uppercase font-[900] masked-element">a fascinating world</h1>
        </div>
      </div>
    </div>
  )
}

export default LogoSection2