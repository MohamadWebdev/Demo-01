import { bg9 } from "../assets"


const Discount = () => {
  return (
    <div className='w-full h-[800px] flex justify-center items-center relative'>

      <div className="w-full flex justify-center items-center absolute lg:flex-row-reverse flex-col">
        <img src={bg9} alt="bg9" className="lg:w-[90%] md:w-[100%]" />
      </div>

      <div className="w-full lg:ml-[15rem] flex flex-col justify-end z-[10] mb-[-225px]">
        <h2 className="text-left text-[50px] uppercase">All cycling <br /> equipment with</h2>

        <div className="relative md:text-[150px] text-[120px]">
          <h1 className="uppercase absolute font-[900] bordered-text text-transparent">20%</h1>

          <h1 className="uppercase font-[900] w-[150px] masked-element">20%</h1>
        </div>
      </div>

    </div>
  )
}

export default Discount