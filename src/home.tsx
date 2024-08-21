import Contact from "./components/contact";
import Domian from "./components/domain";
import Explore from "./components/explore";
import Footer from "./components/footer";
import Herrosection from "./components/herrosecrion";
import Host from "./components/host";
import Navbar from "./components/navbar";
import Plan from "./components/plan";

export default function Home(){
    return(
        <div>
            <Navbar />
            <Herrosection />
            <Domian />
            <Explore />
            <Plan />
            <Contact />
            <Host />
            <Footer />
            

        </div>
    )
}