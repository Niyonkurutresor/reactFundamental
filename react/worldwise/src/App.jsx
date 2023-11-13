import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pricing } from "./pages/pricing";
import { Product } from "./pages/product";
import { Home } from "./pages/homePage";
import { NotFound } from "./pages/404";
import {
  Fragments,
  PagOne,
  PagThree,
  PagTwo,
  SpecificP,
} from "./pages/difPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          {/** using params and questy string */}
          <Route path="/product/:id" element={<SpecificP />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/fragments" element={<Fragments />}>
            {/* children routs */}
            <Route index element={<PagOne />} />
            <Route path="p2" element={<PagTwo />} />
            <Route path="p3" element={<PagThree />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <h1>
        <footer>fixed footer</footer>
      </h1>
    </>
  );
}

export default App;
