import "./App.scss";
import { Slogan, Navbar } from "./assets/components";
import { Hero } from "./assets/sections";

function App() {
   return (
      <>
         <header>
            <Slogan slogan="COLLECT MEMORIES, NOT THINGS" />
            <Navbar />
         </header>
         <main>
            <Hero />
         </main>
      </>
   );
}

export default App;
