import './App.css';
import Header from './Components/Common/Header/Header';
import NavBar from './Components/Common/Navbar/Navbar';
import Section1 from './Components/Common/Section1/Section1';
import Work from './Components/Common/Work/Work';
import Footer from './Components/Common/Footer/Footer';
import { GoogleGeminiEffectDemo } from './Components/UseUi/GoogleGeminiEffectDemo.tsx';
import { SparklesPreview } from './Components/UseUi/SparklesPreview.tsx';
import { NavbarDemo } from './Components/UseUi/NavbarDemo.tsx';



function App() {
  return (
<>
<NavBar></NavBar>
{/* <NavbarDemo></NavbarDemo> */}
<GoogleGeminiEffectDemo></GoogleGeminiEffectDemo>
{/* <SparklesPreview></SparklesPreview> */}
{/* <Header></Header> */}
<Section1></Section1>
<Work></Work>
<Footer></Footer>
</>
  );
}

export default App;
