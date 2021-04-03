import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./css/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
