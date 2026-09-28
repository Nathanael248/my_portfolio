import { Header } from "./components/Header";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import  About  from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Interest from "./components/sections/Interests";
import CTA from "./components/sections/Cta";

import "./App.css";

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <body className="bg-gray-950 min-h-screen flex px- justify-center  font-dm gap-6 ">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Interest />
      <CTA />
    </body>
  );
}

export default App;
