import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landingPage";
import { Login } from "./pages/login";
import { Product } from "./pages/product";
import { Pricing } from "./pages/pricing";
import { Apps } from "./pages/tracking";
import { ErrorPage } from "./pages/404";
import { City, CityDetalis } from "./components/cities";
import { Countries } from "./components/countries";
import { Form } from "./components/form";
import { InformationProvider } from "./contexts/info";

function App() {
  return (
    <div className="bg-stone-700 text-stone-100">
      <InformationProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="app" element={<Apps />}>
              <Route index element={<Navigate replace to={"cities"} />} />
              <Route path={"cities"} element={<City />} />
              <Route path={"cities/:id"} element={<CityDetalis />} />
              <Route path="countries" element={<Countries />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </InformationProvider>
    </div>
  );
}

export default App;
