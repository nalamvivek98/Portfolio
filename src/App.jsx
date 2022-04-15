import  About  from "./components/About/About";
import Intro from "./components/Intro/Intro"
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Menu from "./components/menu/Menu";

const App = () => {
//   <a href="#top">Top</a>
// <a href="#middle">Middle</a>
// <a href="#bottom">Bottom</a>
// <div id="top"><a href="top"></a>Top</div>
// <div id="middle"><a href="middle"></a>Middle</div>
// <div id="bottom"><a href="bottom"></a>Bottom</div>

  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (<div style={{backgroundColor:darkMode?"#222":"white",color:darkMode?"white":""}}>
    <Menu/>
    <Toggle/>
    <Intro />
    <About/>
    <ProductList/>
    <Contact/>
  </div>);
};

export default App;