import { Route, Routes } from "react-router-dom"
import { DCScreen } from "../components/dc/DCScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/NavBar"
import { HeroScreen } from "../components/hero/HeroScreen"

export const DashboardRoutes = () => {
  return (
    <>
        {/* Para mostrar solo el navbar  cuando se navegue a los siguiente componentes */}
        <Navbar/>
        <div className="container">
        <Routes>
            <Route path='/' element={<MarvelScreen/>}/>
            <Route path='marvel' element={<MarvelScreen/>}/>
            <Route path='dc' element={<DCScreen/>}/>
            <Route path='search' element={<SearchScreen/>}/>
            <Route path='hero/:heroId' element={<HeroScreen/>}/>
            
        </Routes>
        </div>
    </>
  )
}
