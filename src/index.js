import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./css/styles.css";
import LoadingUI from "./sections/loading";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingUI />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
