import { NavbarComponent } from "./components/navbar.component";
import { TelephoneComponent } from "./components/telephone.component";

const App = () => {
  

  return (
    <>
      <NavbarComponent />
      <div className="mt-9">
        <TelephoneComponent />
      </div>
    </>
  );
};

export default App;
