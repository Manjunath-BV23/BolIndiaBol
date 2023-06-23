import { Route, Routes } from "react-router"
import { Home } from "./Home/Home"
import { People } from "./People/People"
import Navbar, { TopNavbar } from "./Navbar/Navbar"
import { Planet } from "./Planet/Planet"
import { Politics } from "./Politics/Politics"
import WhiteFooter from "./Footer/WhiteFooter"
import { Privacy } from "./Privacy-Disclaimer/Privacy"
import { Disclaimer } from "./Privacy-Disclaimer/Disclaimer"
import { Menu } from "./Navbar/Menu"


export const Routers = () => {
    return(
        <>
        <Navbar/>
        {/* <Navigation/> */}
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/people" element={<People/>}/>
            <Route path="/planet" element={<Planet/>}/>
            <Route path="/politics" element={<Politics/>}/>
            <Route path="/privacy-policy" element={<Privacy/>}/>
            <Route path="/disclaimer" element={<Disclaimer/>}/>
        </Routes>
        {/* <Footer/> */}
        <WhiteFooter/>
        </>
    )
}