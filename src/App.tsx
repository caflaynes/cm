import "./App.scss";
import { Slogan, Navbar } from "./assets/components";
import { Hero, Cameras } from "./assets/sections";

function App() {
   return (
      <>
         <Slogan slogan="COLLECT MEMORIES, NOT THINGS" />
         <Navbar />
         <main>
            <Hero />
            <Cameras />
         </main>
      </>
   );
}

export default App;
