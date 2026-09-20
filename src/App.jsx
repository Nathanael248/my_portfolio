import { Header } from "./components/Header";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/Projects";
import  About  from "./components/sections/About";

import "./App.css";

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <body className="bg-gray-950 min-h-screen flex px-6 justify-center  font-dm gap-6 ">
      <Header />
      <Hero />
      <About />
      <Projects />
    </body>
  );
}

export default App;
