import { useState } from "react";
import SelectSkip from "./pages/selectSkip";
import ProgressbarLayout from "./layouts/progressbarLayout";

function App() {
  return (
    <>
      <ProgressbarLayout>
        <SelectSkip />
      </ProgressbarLayout>
    </>
  );
}

export default App;
