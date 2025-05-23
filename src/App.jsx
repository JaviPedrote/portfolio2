import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ProjectsItems } from "./components/ProjectsItems";

function App() {
  return (
    <div className="lg:mt-0 font-sans text-white">
      <Navbar />
        <main>
        <Home />
        <ProjectsItems />
      </main>
    </div>
  );
}
export default App;