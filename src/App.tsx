import { Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./components/navbar.component";
import { TelephoneComponent } from "./components/telephone.component";

const App = () => {
  

  return (
    <>
    <NavbarComponent />
    <Routes>        
      <Route path="/"  element={<TelephoneComponent/>} />
  </Routes>
  </>
  );
};

export default App;
