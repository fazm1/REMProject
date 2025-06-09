import { useState } from "react";
import SelectSkip from "./pages/selectSkip";
import ProgressbarLayout from "./layouts/progressbarLayout";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/start";
import End from "./pages/end";

function App() {
  return (
    <>
      <ProgressbarLayout>
        <Routes>
          <Route path="/select-skip" element={<SelectSkip />} />
          <Route path="/start" element={<Start />} />
          <Route path="/end" element={<End />} />


        </Routes>
      </ProgressbarLayout>
    </>
  );
}

export default App;
