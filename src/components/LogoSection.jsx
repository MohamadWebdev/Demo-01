import { bg4, logo2, mask2 } from "../assets"

const LogoSection = () => {
  return (
    <div className="relative flex-col lg:h-[600px] h-[500px] w-full flex justify-center items-center">
      <div className="opacity-[0.5] z-[-1] absolute flex justify-center items-center">
        <img src={bg4} alt="bg4" className='w-full' />
      </div>

      

      <div className="w-[250px] relative mix-blend-">
        <div className="z-[10] absolute w-full h-full flex justify-center items-center mix-blend-darken">
          <img src={mask2} alt="bg4" className='w-full h-full mask-logo' />
        </div>
        <img src={logo2} alt="logo" className="w-full" />
      </div>

      <p className="text-[30px] text-[#db965a] uppercase pt-[4rem]">register for the great race and don't lose your place</p>
    </div>
  )
}

export default LogoSection