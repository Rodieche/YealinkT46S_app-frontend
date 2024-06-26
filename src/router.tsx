import { createBrowserRouter } from "react-router-dom";

import { TelephoneComponent } from './components/telephone.component';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <TelephoneComponent />
    },
  ]);