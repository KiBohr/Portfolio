import { Outlet } from "react-router-dom";
import Header from "../component/header/Header";

const Layout = () => {
    return ( 
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Outlet/>
        </div>
     );
}
 
export default Layout;