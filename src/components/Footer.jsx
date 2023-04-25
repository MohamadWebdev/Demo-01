import { logo } from "../assets"
import { navLinks } from "../constants"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div className='lg:h-[500px] flex items-center lg:flex-row flex-col w-full lg:pl-[3rem] py-[6rem]'>
      
      <div className='flex-[0.5] lg:h-full w-full lg:mb-[0rem] mb-[5rem]'>
        <ul className='list-none flex flex-wrap lg:flex-col flex-row lg:h-full lg:justify-between justify-around max-h-[400px] gap-2'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex-[1] justify-between flex lg:mx-[0] px-[3rem] lg:flex-col items-center lg:h-full w-full'>
        <p className='font-yellowtail lg:text-[35px] text-[45px]'>
          Bike Lovers
        </p>

        <h1 className="uppercase font-[800] text-[50px] text-center">mountain <br /> biking</h1>

        <Link to={'/'}><img src={logo} alt="logo" /></Link>
      </div>

      <div className='flex-1'>
        <div className="z-[20] lg:mt-[0rem] mt-[4rem] lg:h-full w-full items-center lg:items-end flex flex-col justify-center">
          <p className="text-[35px] max-w-[750px] font-[500] uppercase lg:text-right text-center">subscribe to our newsletter</p>

          <input 
            className="h-[40px] mt-[1rem] lg:max-w-[450px] w-[80%] text-[20px] bg-transparent border-[5px] pl-[1.5rem] uppercase text-white lg:w-full outline-none" 
            type="text" 
            placeholder="email" 
          />

          <input 
            className="h-[40px] lg:max-w-[450px] w-[80%] text-[20px] mt-[1rem] font-[900] uppercase text-primary bg-white lg:w-full" 
            type="submit" 
            value={'next step'} 
          />

          <p className="lg:text-right text-center w-[100%] mt-[1.5rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer