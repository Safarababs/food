import About from "./about";
import Chef from "./chef";
import Dishes from "./dishes";
import Footer from "./footer";
import Header from "./header";
import Home from "./home";
import Order from "./order";
import Speciality from "./speciality";
import NewsLetter from "./newsletter";



function App(){
    return (
        <>
            <Header />
            <Home />
            <About />
            <Dishes />
            <Chef />
            <Speciality />
            <Order />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default App;