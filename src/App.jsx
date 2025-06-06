import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="lg:mt-0 font-sans">
      <Navbar />
        <main>
        <Home />
      </main>
    </div>
  );
}
export default App;