import Header from "../components/Header/Header"
import CarouselMain from "../components/MainPage/CarouselMain/CarouselMain"
import Categories from "../components/MainPage/Categories/Categories"
import Contact from "../components/MainPage/Contact/Contact"
import '../styles/HomePageStyle.css'

const HomePage = () => {
  return (
    <>
      <Header/>
      <CarouselMain/>
      <Categories/>
      <Contact/>
      
    </>
  )
}

export default HomePage