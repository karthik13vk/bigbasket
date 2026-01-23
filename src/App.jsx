import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from "./Component/Header/Header";
import Banner from "./Component/Banner/Banner";
import StepsRoadmap from "./Component/StepsRoadmap/StepsRoadmap";
import Stats from "./Component/Stats/Stats";
import Categories_section from "./Component/Categories/Categories_section";
import Footer from "./Component/Footer/Footer";
import viteLogo from '/vite.svg'
import './App.css'
import Tabslider from './Component/Tabslider/Tabslider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Categories_section />
      <StepsRoadmap />
      <Stats />
      <Tabslider />
      <Footer />
    </>
  )
}

export default App
