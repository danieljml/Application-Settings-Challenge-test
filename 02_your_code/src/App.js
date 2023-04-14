import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Settings from "./pages/settings";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Settings />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
