import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Counter from "./components/counter";
import UsersList from "./components/usersList";
import Gallery from "./components/gallery";
import CelsiusToFahrenhait from "./components/celsiusToFahrenhait";
import Navigation from "./components/navigation";

const Routing = () => {
  return (
    <BrowserRouter>
        <Navigation/>
      <Routes>
        <Route exact path="/" element={<Gallery />} />
        <Route exact path="/celsiustofahrenheit" element={<CelsiusToFahrenhait />} />
        <Route exact path="/userlist" element={<UsersList />} />
        <Route exact path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;