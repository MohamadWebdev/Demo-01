import { Link } from "react-router-dom"
import { logo, menu } from "../assets"
import { useState } from "react"
import { navLinks } from "../constants"

const Navbar = () => {
  
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState('')

  return (
    <>
      <h1 className="lg:hidden block uppercase font-[800] sm:text-[80px] text-[60px] text-center">mountain <br /> biking</h1>

      <nav className="flex justify-between items-end z-[30]">
        <Link to={'/'}><img src={logo} alt="logo" /></Link>
        
        <div className="lg:flex w-[90%] flex-col items-center max-w-[700px] hidden">
          <h1 className="uppercase font-[800] text-[80px] text-center">mountain <br /> biking</h1>

          <ul className="uppercase flex w-full text-[20px] justify-around flex-wrap">
            
            {navLinks.map((links, index) => (
              <li key={index} className="mx-[0.2rem]">
                <a
                  onClick={()=> {
                    setToggle((e) => !e);
                    setActive(links.title)
                  }} 
                  className={`hover:text-secondary ${active === links.title ? 'text-secondary' : 'text-white'}`}
                  href="#"
                >
                  {links.title}
                </a>  
              </li>
            ))}

          </ul>
        </div>

        <div className="w-auto flex items-end">
          <span className="flex cursor-pointer uppercase text-[25px] justify-center items-center w-[170px] h-[50px] border-[3px] border-white lg:mr-[0rem] mr-[2rem]"><a href="#">register</a></span>

          <div className="relative items-end flex-col cursor-pointer flex">
            <img src={menu} alt="menu" className="w-[45px] lg:hidden block" onClick={() => setToggle((e) => !e)} />

            <ul className={`bg-primary absolute w-[250px] top-[35px] p-[20px] text-[20px] uppercase rounded-[15px] z-[28] lg:hidden ${toggle ? 'block' : 'hidden'}`}>

              {navLinks.map((links, index) => (
                <li key={index}>
                  <a
                    onClick={()=> {
                      setToggle((e) => !e);
                      setActive(links.title)
                    }} 
                    className={`hover:text-secondary ${active === links.title ? 'text-secondary' : 'text-white'}`}
                    href="#"
                  >
                    {links.title}
                  </a>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>

      <hr className="border-[1px] w-full mt-[3rem] mb-[6rem]" />
    </>
  )
}

export default Navbar