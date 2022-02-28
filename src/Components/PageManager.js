import Home from '../Components/Pages/Home';
import About from '../Components/Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function PageManager(props) {

    function SwitchPage(props){
        switch(props.page){
            case 0:
                return <Home></Home>
            case 1:
                return <About></About>;
            case 2:
                return <Skills></Skills>;
            case 3:
                return <Projects></Projects>;
            case 4:
                return <Contact></Contact>
        }
    }

    return (
        <div>
            {SwitchPage(props)}
        </div>
    );
}

export default PageManager;