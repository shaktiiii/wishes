import {  Route, Routes } from "react-router-dom";
import GoodMorning from "../page/GoodMorning";
import HappyNewYear from "../page/HappyNewYear";
import App from "../App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/good-morning" element={<GoodMorning />} />

      <Route path="/happy-new-year" element={<HappyNewYear />} />
    </Routes>
  );
};

export default AppRoutes;
