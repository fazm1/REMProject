import { useState } from "react";
import SelectSkip from "./pages/selectSkip";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/start";
import End from "./pages/end";
import BookingLayout from "./layouts/bookingLayout";

function App() {
  return (
    <>
      <BookingLayout>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/select-skip" element={<SelectSkip />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </BookingLayout>
    </>
  );
}

export default App;
