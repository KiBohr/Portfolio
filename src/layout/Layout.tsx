import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/header/Header";
import CustomCursor from "@/component/customCursor/CustomCursor";
import Footer from "@/component/footer/Footer";


const Layout = () => {

    const location = useLocation()
    // console.log(location)

    // um zu entscheiden, wo der footer angezeigt werden soll
    const hideFooter = location.pathname === "/contact"

   

    return ( 
        <div className="flex flex-col min-h-screen">
            <CustomCursor/>
            <Header/>
            <Outlet/>
            {!hideFooter && <Footer/>}
        </div>
     );
}
 
export default Layout;