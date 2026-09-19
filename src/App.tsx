import "./App.scss";
import { Slogan, Navbar } from "./assets/components";
import { Hero, Cameras, Details } from "./assets/sections";

function App() {
   return (
      <>
         <Slogan slogan="COLLECT MEMORIES, NOT THINGS" />
         <Navbar />
         <main>
            <Hero />
            <Cameras />
            <Details />
         </main>
      </>
   );
}

export default App;
