import "./App.scss";
import { Navbar } from "./assets/components";
import { Hero, Cameras, Details } from "./assets/sections";

function App() {
   return (
      <>
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
