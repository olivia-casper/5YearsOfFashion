import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import './components/css/styles.css'; //
import './components/css/years.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import Year2020 from "./pages/Year2020";
import Year2021 from "./pages/Year2021";
import Year2022 from "./pages/Year2022";
import Year2023 from "./pages/Year2023";
import Year2024 from "./pages/Year2024";
import Year2025Predictions from "./pages/Year2025Predictions";


function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Year2020" element={<Year2020 />} />
          <Route path="Year2021" element={<Year2021 />} />
          <Route path="Year2022" element={<Year2022 />} />
          <Route path="Year2023" element={<Year2023 />} />
          <Route path="Year2024" element={<Year2024 />} />
          <Route path="Year2025Predictions" element={<Year2025Predictions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

