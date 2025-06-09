import { useState } from "react";
import SelectSkip from "./pages/selectSkip";
import ProgressbarLayout from "./layouts/progressbarLayout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ProgressbarLayout>
        <Routes>
          <Route path="/select-skip" element={<SelectSkip />} />
        </Routes>
      </ProgressbarLayout>
    </>
  );
}

export default App;
