import { Outlet} from "react-router-dom";
import Header from "../component/header/Header";
import CustomCursor from "@/component/customCursor/CustomCursor";
import Footer from "@/component/footer/Footer";


const Layout = () => {
    
    return ( 
        <div className="flex flex-col min-h-screen">
            <CustomCursor/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default Layout;