import React, { useState } from "react";

import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [jsonData, setJsonData] = useState("");

  const showData = (data) => {
    setJsonData(JSON.stringify({ data: data }, null, 4));
  };

  return (
    <div className="app">
      <Form showData={showData} />
      {jsonData !== "" && <Result data={jsonData} />}
    </div>
  );
}

export default App;
