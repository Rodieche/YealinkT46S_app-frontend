import { Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./components/navbar.component";
import { TelephoneComponent } from "./components/telephone.component";
import { useEffect } from "react";
import { connectToServer } from "./websocket/socket-client";
import { AddTelephoneComponent } from "./components/addTelephone";

const App = () => {

  useEffect(() => {
    connectToServer();
  },[])

  return (
    <>
    <NavbarComponent />
    <Routes>        
      <Route path="/"  element={<TelephoneComponent/>} />
      <Route path="/addTelephone"  element={<AddTelephoneComponent/>} />
  </Routes>
  </>
  );
};

export default App;
