import { useContext } from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Intro />
      <About />
      {/*<ProductList />*/}
    </div>
  );
};

export default App;
