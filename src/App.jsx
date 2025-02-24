// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { ProjectsItems } from "./components/ProjectsItems";

function App() {
  return (
    <div className="mt-10 lg:mt-0 font-sans text-white w-screen">
      {/* <Navbar /> */}
      <Home />
      <ProjectsItems />
    </div>
  );
}

export default App;