import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    const navigation =useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h1>This is a home components</h1>
            <Header></Header>
            {
                navigation.state ==="loading" ? 
                <p> loading ....</p> : <Outlet></Outlet>
            }
           
           <Footer></Footer>
        </div>
    );
};

export default Home;