import { Outlet} from "react-router-dom";
import Header from "../component/header/Header";
import CustomCursor from "@/component/customCursor/CustomCursor";
import Footer from "@/component/footer/Footer";


    
    const Layout = () => {
        return (
          <div className="flex min-h-screen flex-col ">
            <CustomCursor />
            <Header />
      
            <main className="flex-1 flex items-center justify-center mb-20">
              <Outlet />
            </main>
      
            <Footer />
          </div>
        );
      };
      
 
export default Layout;