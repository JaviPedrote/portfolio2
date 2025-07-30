import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="lg:mt-0 font-sans">
      <Navbar />
        <main>
        <Home />
      </main>
      {/* Chatbot flotante - no afecta el layout */}
      <Chatbot />
    </div>
  );
}
export default App;