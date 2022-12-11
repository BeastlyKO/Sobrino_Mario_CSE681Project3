import { Home } from "./components/Home";
import { Records } from "./components/Records";
import { RecordsButton } from "./components/RecordsButton";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/records',
    element: <Records  />
  },
  {
    path: '/recordsbutton',
    element: <RecordsButton />
  }

];

export default AppRoutes;
