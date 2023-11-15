import HeaderLogIn from "../components/Header/HeaderLogIn"
import CarouselMain from "../components/MainPage/CarouselMain/CarouselMain"
import Categories from "../components/MainPage/Categories/Categories"
import Contact from "../components/MainPage/Contact/Contact"
import '../styles/HomePageStyle.css'

const HomePageLogIn = () => {
  return (
    <>
      <HeaderLogIn/>
      <CarouselMain/>
      <Categories/>
      <Contact/>
   
    </>
  )
}

export default HomePageLogIn