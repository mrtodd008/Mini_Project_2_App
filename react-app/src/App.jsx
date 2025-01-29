import AppRoutes from "./Routes/AppRoutes";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNavigation";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <BottomNav />
    </>
  );
}

export default App;
