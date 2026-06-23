import { Projects } from "./components/Projects";
import { HomePage } from "./components/HomePage";
import { Header } from "./components/Header";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomePage />
      <Projects />
    </>
  );
}

export default App;
