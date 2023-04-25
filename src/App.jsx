import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { bg2 } from './assets'
import LogoSection from './components/LogoSection'
import NewsSubscription from './components/NewsSubscription'
import WinnerShow from './components/WinnerShow'
import LogoSection2 from './components/LogoSection2'
import Description from './components/Description'
import Discount from './components/Discount'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <div className='max-w-[1440px] z-[10]  m-auto w-full px-[2rem] pt-[5rem] overflow-hidden  justify-center flex flex-col'>

        <Navbar />
        <Hero />
        <LogoSection />
        <NewsSubscription />
        <WinnerShow />
        <LogoSection2 />
        <Description />
        <Discount />
        <hr className='lg:mt-[20rem] md:mt-[15rem] sm:mt-[10rem] mt-[5rem] border-[2px]' />
        <Footer />
        <hr className='border-[2px] mb-[2rem]' />

      </div>

      {/* background image 2 */}
      <div className='w-[9000px] top-[790px] absolute overflow-hidden flex justify-center items-center'>
        <img src={bg2} alt="bg" className='w-full' />
      </div>
    </BrowserRouter>
  )
}

export default App