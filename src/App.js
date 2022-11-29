import "./App.css";
import { Footer, Navbar, Services, Transactions, WelCome } from "./components";

function App() {
  return (
    <div className="mid-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <WelCome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
